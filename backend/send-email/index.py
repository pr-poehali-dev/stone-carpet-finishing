"""Отправка заявки с сайта каменного ковра на почту владельца"""
import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

SMTP_HOST = 'smtp.yandex.ru'
SMTP_PORT = 465
FROM_EMAIL = 'stroyvsaratov@yandex.ru'
TO_EMAIL = 'stroyvsaratov@yandex.ru'


def handler(event: dict, context) -> dict:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '')
    phone = body.get('phone', '')
    room = body.get('room', '')
    material = body.get('material', '')
    area = body.get('area', '')
    comment = body.get('comment', '')

    subject = f'Новая заявка с сайта — {name}'
    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; background: #f5f0e8;">
      <h2 style="color: #1a1612; font-size: 22px; margin-bottom: 20px;">Новая заявка на расчёт проекта</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #888; width: 140px;">Имя</td><td style="padding: 8px 0; font-weight: bold; color: #1a1612;">{name}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Телефон</td><td style="padding: 8px 0; font-weight: bold; color: #1a1612;">{phone}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Тип помещения</td><td style="padding: 8px 0; color: #1a1612;">{room or '—'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Материал</td><td style="padding: 8px 0; color: #1a1612;">{material or '—'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Площадь</td><td style="padding: 8px 0; color: #1a1612;">{area + ' м²' if area else '—'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Комментарий</td><td style="padding: 8px 0; color: #1a1612;">{comment or '—'}</td></tr>
      </table>
      <div style="margin-top: 24px; padding: 12px 20px; background: #c9a96e; border-radius: 4px; display: inline-block;">
        <a href="tel:{phone}" style="color: #1a1612; font-weight: bold; text-decoration: none;">Позвонить: {phone}</a>
      </div>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = FROM_EMAIL
    msg['To'] = TO_EMAIL
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    password = os.environ.get('SMTP_PASSWORD', '')
    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(FROM_EMAIL, password)
        server.sendmail(FROM_EMAIL, TO_EMAIL, msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'ok': True})
    }
