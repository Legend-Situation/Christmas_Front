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
    category: 'T/F',
    question: '친구가 크리스마스 계획을 물어보면 나는?',
    options: [
      { text: '이날만큼은 특별하게 보내야지~', value: 'F' },
      { text: '굳이 뭘 해야 하는 건 아니지 않아?', value: 'T' }
    ]
  },
  {
    id: 2,
    category: 'E/I',
    question: '크리스마스 당일, 집에서 쉬고 있는데 나오라는 친구의 전화',
    options: [
      { text: '약속도 없었는데 잘 됐다! 지금 바로 갈게!', value: 'E' },
      { text: '지금 나오라고? 사람 많을 텐데..', value: 'I' }
    ]
  },
  {
    id: 3,
    category: 'E/I',
    question: '약속 시간 1시간 전 친구에게 걸려 온 전화! 너 뭐 입고 나올 거야?',
    options: [
      { text: '1년에 한 번인 데 힘 좀 줘야지~ㅎㅎ', value: 'E' },
      { text: '튀기 싫어! 적당히 무난하게 입을 거야.', value: 'I' }
    ]
  },
  {
    id: 4,
    category: 'S/N',
    question: '더현대에 있는 화려한 트리를 보러 왔다. 내 생각은?',
    options: [
      { text: '와 진짜 이쁘다. 이건 다 어떻게 만들었을까?', value: 'S' },
      { text: '(갑자기 트리 괴물이 튀어나오면 어떡하지?)', value: 'N' }
    ]
  },
  {
    id: 5,
    category: 'T/F',
    question: '친구가 갑자기 쓸데없는 선물을 주면서 ‘너도 줘’라고 한다면?',
    options: [
      { text: '일단 받았으니 나도 뭔가 줘야겠지?', value: 'F' },
      { text: '쓸데없는 걸 굳이 왜 주고받는 거지..', value: 'T' }
    ]
  },
  {
    id: 6,
    category: 'P/J',
    question:
      '크리스마스 선물을 사려고 쇼핑하러 왔는데, 계획에 없던 물건이 눈에 띈다.',
    options: [
      { text: '이건 지금 안 사면 후회할 것 같아ㅠㅠㅠ', value: 'P' },
      { text: '계획에 없었던 건 사지 말자..', value: 'J' }
    ]
  },

  {
    id: 7,
    category: 'E/I',
    question: '화이트 크리스마스! 밖에 눈이 펑펑 온다. 나는?',
    options: [
      {
        text: '헐! 지금 당장 나가서 구경해야지!',
        value: 'E'
      },
      { text: '창밖으로 보는 걸로 충분해… 나가면 너무 추워.', value: 'I' }
    ]
  },
  {
    id: 8,
    category: 'S/N',
    question:
      '사실.. 산타는 있는데, 너희가 1년 동안 한 번도 안 운 적이 없어서 안 온 거래.',
    options: [
      { text: '무슨 멍멍이 소리야 그게.', value: 'S' },
      { text: '오 일리 있는데..? 울지 말걸…', value: 'N' }
    ]
  },
  {
    id: 9,
    category: 'P/J',
    question: '크리스마스에 가려고 고른 맛집이 문을 닫았다. 나는?',
    options: [
      { text: '어쩔 수 없지! 그냥 아무 데나 들어가자!', value: 'P' },
      { text: '이럴 수가..ㅠ 빨리 다른 맛집을 찾아보자.', value: 'J' }
    ]
  },
  {
    id: 10,
    category: 'T/F',
    question:
      '산타와 루돌프가 선물을 놓고 가려다 내 방을 어질러놨다. 누구에게 더 화가 날까?',
    options: [
      { text: '사과는 하지도 않고 정리부터 하는 산타', value: 'F' },
      { text: '눈물을 머금으며 사과만 30분 동안 하는 루돌프', value: 'T' }
    ]
  },
  {
    id: 11,
    category: 'P/J',
    question: '산타와 루돌프의 수습 시작!',
    options: [
      { text: '그냥 알아서 깨끗하게 치워줘.', value: 'P' },
      { text: '이건 저기 두고, 아니다.. 그냥 내가 할게.', value: 'J' }
    ]
  },
  {
    id: 12,
    category: 'S/N',
    question: '수습을 끝낸 산타와 루돌프가 인사를 하고 떠난다. 어떤 모습으로 떠났는가?',
    options: [
      { text: '내 방문을 열고 걸어 나간다.', value: 'S' },
      { text: '창문을 열고 하늘로 날아간다.', value: 'N' }
    ]
  }
];
