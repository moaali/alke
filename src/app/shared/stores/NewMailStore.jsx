import { observable } from 'mobx';

class NewMailStore {
  @observable mails = [
    {
      'id': 1,
      'name': 'John Doe',
      time: '2 minutes ago',
      'desc': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
      'id': 2,
      'name': 'John Doe',
      time: '2 minutes ago',
      'desc': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
    },
    {
      'id': 3,
      'name': 'John Doe',
      time: '2 minutes ago',
      'desc': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
    },
    {
      'id': 4,
      'name': 'John Doe',
      time: '2 minutes ago',
      'desc': 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
    },
    {
      'id': 5,
      'name': 'John Doe',
      time: '2 minutes ago',
      'desc': 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
    },
  ]

  getMails() {
    return this.mails;
  }

  countMails() {
    return this.mails.length;
  }
}

export default new NewMailStore();
