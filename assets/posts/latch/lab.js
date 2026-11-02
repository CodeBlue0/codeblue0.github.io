(() => {
  'use strict';
  const lab = document.getElementById('latch-lab');
  if (!lab) return;
  let q = 0;
  let wasForbidden = false;
  const buttons = Array.from(lab.querySelectorAll('button[data-s]'));
  const history = lab.querySelector('ol');
  function apply(s, r) {
    let qb;
    let label;
    let detail;
    if (s && r) {
      q = 0;
      qb = 0;
      label = 'FORBIDDEN';
      detail = 'S=R=1이므로 두 출력은 모두 0입니다. 여기서 유지로 바꾸면 이후 상태를 확정할 수 없습니다.';
    } else if (s || r) {
      q = s ? 1 : 0;
      qb = 1 - q;
      label = s ? 'SET' : 'RESET';
      detail = s ? 'Set 입력이 Q를 1로 만들었습니다. 이제 유지로 바꿔보세요.' : 'Reset 입력이 Q를 0으로 만들었습니다. 이제 유지로 바꿔보세요.';
    } else {
      if (wasForbidden) q = null;
      qb = q === null ? null : 1 - q;
      label = q === null ? 'UNKNOWN' : 'HOLD';
      detail = q === null ? '금지 입력을 동시에 해제한 뒤의 값은 이 모델에서 미정입니다. Set이나 Reset으로 상태를 정해주세요.' : '두 입력이 0으로 돌아와도 직전에 저장한 값이 유지됩니다.';
    }
    wasForbidden = Boolean(s && r);
    const show = value => value === null ? '?' : String(value);
    lab.dataset.invalid = String(Boolean(s && r) || q === null);
    for (const button of buttons) button.setAttribute('aria-pressed', String(Number(button.dataset.s) === s && Number(button.dataset.r) === r));
    for (const [key, value] of Object.entries({s, r, q: show(q), qb: show(qb)})) {
      lab.querySelector(`[data-value="${key}"]`).textContent = value;
      const wire = lab.querySelector(`[data-wire="${key}"]`);
      if (wire) wire.dataset.level = value;
    }
    lab.querySelector('[data-status-title]').textContent = `${label} · Q = ${show(q)} / Q_bar = ${show(qb)}`;
    lab.querySelector('[data-status-detail]').textContent = detail;
    const entry = document.createElement('li');
    entry.textContent = `${s}${r} → ${show(q)}`;
    history.appendChild(entry);
    while (history.children.length > 6) history.firstElementChild.remove();
  }
  buttons.forEach(button => button.addEventListener('click', () => apply(Number(button.dataset.s), Number(button.dataset.r))));
  lab.querySelector('[data-wire="q"]').dataset.level = '0';
  lab.querySelector('[data-wire="qb"]').dataset.level = '1';
})();
