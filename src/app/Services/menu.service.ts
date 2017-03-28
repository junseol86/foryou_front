/**
 * Created by Hyeonmin on 2017-03-09.
 */


export class MenuService {
  menus = [
    {
      name: '회사소개',
      link: 'introduction',
      sub_menus: [
        {
          name: '인사말',
          link: '/greeting'
        },
        {
          name: '구성원 소개',
          link: '/members'
        }
      ]
    },

    {
      name: '업무분야',
      link: 'fields',
      sub_menus: [
        {
          name: '세무대리',
          link: '/tax_representative'
        },
        {
          name: '재산세제 컨설팅',
          link: '/property_tax'
        },
        {
          name: '조세불복',
          link: '/tax_protest'
        },
        {
          name: '경영지원',
          link: '/management_support'
        },
        {
          name: '기업진단',
          link: '/management_consulting'
        }
      ]
    },

    {
      name: '조세정보',
      link: 'tax_info',
      sub_menus: [
        {
          name: '월별 세무일지',
          link: '/monthly_journal'
        },
        {
          name: '세무뉴스',
          link: 'tax_news'
        }
      ]
    },

    {
      name: '온라인상담',
      link: 'online_consulting',
      sub_menus: [
        {
          name: '자주 묻는 질문',
          link: '/faq'
        },
        {
          name: '질문과 답변',
          link: '/qna'
        }
        ]
    },

    {
      name: '오시는 길',
      link: 'direction',
      sub_menus: null
    }
  ];

}
