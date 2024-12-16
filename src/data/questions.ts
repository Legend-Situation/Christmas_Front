interface Option {
  text: string;
  value: string;
}

interface Question {
  id: number;
  category: string;
  question: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    category: 'E/I',
    question: '크리스마스 당일, 친구들이 크리스마스 파티에 초대한다.',
    options: [
      { text: '좋아! 바로 갈게! 사람들 만나는 게 재미있지.', value: 'E' },
      { text: '파티는 좀 부담스러워… 집에서 쉬는 게 더 좋아.', value: 'I' },
    ],
  },
  {
    id: 2,
    category: 'S/N',
    question: '더현대에 있는 화려한 트리를 보러 왔다. 나의 생각은?',
    options: [
      { text: '와.. 이건 다 어떻게 만들었을까? 디테일 대박!', value: 'S' },
      { text: '갑자기 저 안에 있는 트리 괴물이 튀어나오면 어떡해?', value: 'N' },
    ],
  },
  {
    id: 3,
    category: 'T/F',
    question: "친구가 갑자기 쓸데없는 선물을 주면서 ‘너도 줘’라고 한다면?",
    options: [
      { text: '일단 받았으니 나도 뭔가 줘야겠지?', value: 'F' },
      { text: '쓸데없는 걸 굳이 왜 달라고 하는 거지… 주기 싫다', value: 'T' },
    ],
  },
  {
    id: 4,
    category: 'P/J',
    question: '크리스마스 선물을 사려고 쇼핑하러 나왔는데, 계획에 없던 물건이 눈에 띈다.',
    options: [
      { text: '이거 너무 귀엽다! 그냥 바로 사버릴래.', value: 'P' },
      { text: '계획에 없던 건데… 정말 필요할까??', value: 'J' },
    ],
  },
  {
    id: 5,
    category: 'T/F',
    question: '크리스마스에 특별히 내가 하고 싶은 것은?',
    options: [
      { text: '이 날만큼은 친구들이랑 특별하게 보내야지!', value: 'F' },
      { text: '크리스마스는 그냥 평범한 하루 아닐까? 굳이 뭐…', value: 'T' },
    ],
  },
  {
    id: 6,
    category: 'P/J',
    question: '크리스마스 파티에 입고 갈 옷을 고르는 중이다. 나는?',
    options: [
      { text: '이거? 저거? 그냥 기분 내키는 대로 입으면 되지!', value: 'P' },
      { text: '분명히 사진도 찍을 텐데… 이쁜으로 옷 골라야지.', value: 'J' },
    ],
  },
  {
    id: 7,
    category: 'E/I',
    question: '크리스마스에 눈이 펑펑 온다. 나는?',
    options: [
      { text: '너무 예쁘다! 친구들이랑 나가서 눈싸움 해야지!', value: 'E' },
      { text: '창밖으로 보는 걸로 충분해… 나가면 너무 추워.', value: 'I' },
    ],
  },
  {
    id: 8,
    category: 'S/N',
    question: '사실.. 산타는 있는데, 너네가 학생 때 1년에 한 번도 안 운 적이 없어서 안 온 거래.',
    options: [
      { text: '무슨 멍멍이소리야 그게', value: 'S' },
      { text: '오 일리 있는데..? 울지 말걸…', value: 'N' },
    ],
  },
  {
    id: 9,
    category: 'P/J',
    question: '크리스마스에 가려고 고른 맛집이 문을 닫았다. 나는?',
    options: [
      { text: '아쉽다. 그냥 지나가다 맛있어 보이는 곳 가자.', value: 'P' },
      { text: '이럴 수가... 다른 맛집을 검색해봐야겠어', value: 'J' },
    ],
  },
  {
    id: 10,
    category: 'E/I',
    question: '크리스마스 이브 밤, 갑자기 친구가 만나자고 한다.',
    options: [
      { text: '할 것도 없었는데 잘됐다! 바로 나갈 준비해야지.', value: 'E' },
      { text: '갑자기 만나자고? 너무 부담스러운데…', value: 'I' },
    ],
  },
  {
    id: 11,
    category: 'S/N',
    question: '크리스마스 선물을 고를 때 나는?',
    options: [
      { text: '현실적으로 유용한 선물이 최고지. 실용성 우선!', value: 'S' },
      { text: '평소에 상상도 못했던, 특별한 선물을 준비해야지!', value: 'N' },
    ],
  },
  {
    id: 12,
    category: 'T/F',
    question: '크리스마스에 특별히 내가 하고 싶은 것은?',
    options: [
      { text: '이 날만큼은 친구들이랑 특별하게 보내야지!', value: 'F' },
      { text: '크리스마스는 그냥 평범한 하루 아닐까? 굳이…', value: 'T' },
    ],
  },
];