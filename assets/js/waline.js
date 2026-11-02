import { init } from 'https://unpkg.com/@waline/client@3.16.1/dist/waline.js';

const container = document.getElementById('waline');

if (container) {
  init({
    el: container,
    serverURL: container.dataset.serverUrl,
    path: container.dataset.path,
    lang: 'ko-KR',
    login: 'disable',
    meta: ['nick'],
    requiredMeta: [],
    locale: {
      nick: '닉네임 (선택)',
      nickError: '닉네임을 확인해 주세요.',
      anonymous: '익명',
      placeholder: '댓글을 남겨 주세요.',
      sofa: '',
    },
    imageUploader: false,
    search: false,
    reaction: false,
    pageview: false,
    comment: false,
    noRss: true,
  });
}
