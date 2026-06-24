export type Property = {
  id: string
  name: string
  type: '아파트' | '오피스텔' | '원룸'
  region: string
  price: string
  area: string
  status: string
  statusTone: 'success' | 'info'
  image: string
}

export const PROPERTIES: Property[] = [
  {
    id: 'mapo-lake',
    name: '마포 레이크 푸르지오',
    type: '아파트',
    region: '서울 마포구 아현동',
    price: '전세 3.8억',
    area: '전용 59㎡',
    status: '위험도 낮음',
    statusTone: 'success',
    image: '/images/property-apartment.png',
  },
  {
    id: 'gangnam-central',
    name: '강남역 센트럴 타워',
    type: '오피스텔',
    region: '서울 강남구 역삼동',
    price: '월세 100 / 120',
    area: '전용 31㎡',
    status: '서류 확인 완료',
    statusTone: 'info',
    image: '/images/property-officetel.png',
  },
  {
    id: 'busan-green',
    name: '부산 해운대 그린빌라',
    type: '원룸',
    region: '부산 해운대구 우동',
    price: '전세 1.9억',
    area: '전용 45㎡',
    status: '외국인 계약 가능',
    statusTone: 'success',
    image: '/images/property-villa.png',
  },
]
