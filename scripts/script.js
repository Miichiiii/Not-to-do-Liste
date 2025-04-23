// script.js
const ziel = 10;
let aufgaben = JSON.parse(localStorage.getItem('aufgaben')) || [];
const listeEl = document.getElementById('aufgabenListe');
const formular = document.getElementById('aufgabenFormular');

formular.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = eingaben.text.value.trim();
    if (!text) return;                // nichts tun, wenn leer
    // neues Listenelement bauen
    const li = document.createElement('li');
    li.innerHTML = `<div class="task-info"><strong>${text}</strong></div>`;
    // in die UL einfügen
    listeEl.appendChild(li);
    // Eingabefeld zurücksetzen
    this.reset();
  });

const exportKnopf = document.getElementById('exportKnopf');
const eingaben = {
  text: document.getElementById('aufgabeText'),
  faellig: document.getElementById('aufgabeFaelligkeit'),
  prioritaet: document.getElementById('aufgabePrioritaet'),
  dauer: document.getElementById('aufgabeDauer')
};
const zaehlerEl = document.getElementById('erledigteAnzahl');
const xpFillEl = document.getElementById('erfahrungFuell');
function statusAktualisieren() {
  const erledigt = aufgaben.filter(a => a.status === 'abgeschlossen').length;
  zaehlerEl.textContent = erledigt;
  const prozent = Math.min((erledigt / ziel) * 100, 100);
  xpFillEl.style.width = prozent + '%';
}

document.addEventListener('DOMContentLoaded', () => {
  updateStatuses();
  renderAufgaben();
});

function filternSortieren(arr) {
  return arr
    .filter(a => a.status === 'aktiv' || a.status === 'faellig');
}
function renderQuests() {
    const tasks = updateStatus();         // hier ist das gefilterte Array
    listEl.innerHTML = '';
  
    tasks.forEach(q => {
      const li = document.createElement('li');
      // ➡️ finde den Index im Original-Array
      const originalIndex = quests.findIndex(item => item === q);
  
      const info = document.createElement('div');
      info.innerHTML = `
        <strong>${q.text}</strong><br>
        <span class="task-info">
          Due: ${q.due} | Priority: ${q.priority} | ${q.duration}h
        </span>
      `;
  
      const btn = document.createElement('button');
      btn.className = 'remove';
      btn.textContent = '💥';
      // ➡️ benutze jetzt originalIndex
      btn.onclick = () => completeQuest(originalIndex);
  
      li.append(info, btn);
      listEl.appendChild(li);
    });
  
    localStorage.setItem('quests', JSON.stringify(quests));
  }
  