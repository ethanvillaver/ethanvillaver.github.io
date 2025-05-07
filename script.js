// Motivational messages for each page
const messages = {
    'index.html': "🎵 Let's make music today! Every master was once a beginner.",
    'getting_started.html': "🔑 Getting started is the first step to greatness.",
    'beginner_lessons.html': "🎼 Practice makes progress. Let's read some music!",
    'practice_tips.html': "⏱️ Small consistent effort beats long random sessions!",
    'community.html': "🌍 You're not alone—millions are learning piano with you!"
  };
  
  // Show a unique message per page
  const page = window.location.pathname.split("/").pop();
  if (messages[page]) {
    setTimeout(() => {
      alert(messages[page]);
    }, 1200);
  }
  
  // Piano fact generator
  function showPianoFact() {
    const facts = [
      "🎹 The piano has over 12,000 parts, 10,000 of which are moving!",
      "🎹 The modern piano evolved from the harpsichord around 1700.",
      "🎹 The longest piano piece is over 18 hours long!",
      "🎹 Middle C is near the center of your keyboard – your musical anchor.",
      "🎹 Practicing 20 mins a day can lead to major improvement in just a few weeks!"
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    alert(fact);
  }
  
  // Highlight tip boxes briefly
  function highlightTips() {
    const boxes = document.querySelectorAll('.content-box');
    boxes.forEach(box => {
      box.classList.add('highlight');
      setTimeout(() => box.classList.remove('highlight'), 2000);
    });
  }
  