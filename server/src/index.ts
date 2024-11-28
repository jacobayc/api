import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000
const host = 'https://3874-121-162-171-98.ngrok-free.app'
console.log(host ,"현재 host")

const corsOptions = {
  origin:'*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization','ngrok-skip-browser-warning']
}

app.use(cors({ origin: '*' }));
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({
    "id": 20028669,
    "payType": 1,
    "type": 200,
    "status": 10,
    "serviceId": 39,
    "duration": 1030,
    "name": "채널 시청 이용권",
    "nameEn": null,
    "description": "모바일/PC + 고화질 + 모든 채널 LIVE + VOD",
    "beginDate": "2024-11-04 14:01:11",
    "endDate": "2024-12-05 14:01:10",
    "nextServiceId": 0,
    "nextServiceName": null,
    "priceOrigin": 5000,
    "price": 5000,
    "percent": 0,
    "priceTax": 500,
    "priceTotal": 5500,
    "actualPayAmount": 5500,
    "googleProductPrice": 5500,
    "iosIapPrice": 0,
    "unit": "KRW",
    "isCanceled": 0,
    "isFavorite": false,
    "freeTrialStatus": 1,
    "isPromotionCancel": false,
    "isSubscription": true,
    "cancelEnabled": false,
    "scope": [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    "partner": null
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})