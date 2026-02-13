'use client'
import { useState } from 'react'
import styles from './page.module.css'

const stages = [
  {
    question: "हम पहली बार कहाँ मिले थे?",
    options: ["कॉफी शॉप में", "दोस्तों के जरिए", "ऑफिस में", "ऑनलाइन"],
    correct: 1,
    message: "हाँ! वो जादुई दिन जब हमारी राहें मिली थीं... ❤️"
  },
  {
    question: "हमने साथ में पहली फिल्म कौन-सी देखी थी?",
    options: ["रोमांटिक कॉमेडी", "एक्शन फिल्म", "थ्रिलर", "एनिमेटेड मूवी"],
    correct: 0,
    message: "मुझे याद है उस फिल्म के दौरान मैंने तुम्हारा हाथ पकड़ा था... 🎬"
  },
  {
    question: "आपको मेरी कौन-सी बात सबसे ज़्यादा पसंद है?",
    options: ["आपको हँसाना", "आपके लिए खाना बनाना", "आपकी बातें सुनना", "आपको सरप्राइज़ देना"],
    correct: 2,
    message: "मैं हमेशा आपकी हर बात सुनने के लिए रहूँगा, देवी! 💕"
  },
  {
    question: "कौन-सा गाना आपको हमारी याद दिलाता है?",
    options: ["हमारी शादी का गाना", "हमारे पहले डांस का गाना", "कोई रैंडम गाना जो हमें पसंद है", "वो गाना जो पहली मुलाकात में चल रहा था"],
    correct: 1,
    message: "जब भी वो गाना सुनता हूँ, आपके साथ डांस याद आ जाता है 🎵"
  },
  {
    question: "हमारे रिश्ते की कौन-सी बात आपको सबसे प्यारी लगती है?",
    options: ["हम एक-दूसरे को हँसाते हैं", "हमारी एडवेंचर भरी यादें", "हम एक-दूसरे का साथ देते हैं", "ये सब"],
    correct: 3,
    message: "बिल्कुल सही — हमारे रिश्ते की हर बात खास है! 🌟"
  }
]

export default function Home() {
  const [currentStage, setCurrentStage] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [started, setStarted] = useState(false)
  const [showWrongPopup, setShowWrongPopup] = useState(false)
  const [showPoem, setShowPoem] = useState(false)

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === stages[currentStage].correct) {
      setShowMessage(true)
      setTimeout(() => {
        if (currentStage < stages.length - 1) {
          setCurrentStage(currentStage + 1)
          setShowMessage(false)
        }
      }, 3000)
    } else {
      setShowWrongPopup(true)
    }
  }

  const handleBack = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1)
      setShowMessage(false)
    }
  }

  const handleHome = () => {
    setStarted(false)
    setCurrentStage(0)
    setShowMessage(false)
    setShowPoem(false)
  }

  if (showPoem) {
    return (
      <div className={styles.poemContainer}>
        <div className={styles.poemCard}>
          <h1 className={styles.poemTitle}>आपके लिए ❤️</h1>
         <div className={styles.poem}>
  <p>आपकी मुस्कान में है मेरी दुनिया,</p>
  <p>आपकी बातों में है मेरी खुशी।</p>
  <p>आपके साथ हर पल है खास,</p>
  <p>आपके बिना अधूरी है ये जिंदगी।</p>
  <br/>
  <p>आपकी आँखों में देखता हूँ सपने,</p>
  <p>आपके साथ बनाता हूँ यादें।</p>
  <p>हर दिन आपके साथ है वैलेंटाइन,</p>
  <p>आप मेरी सबसे प्यारी कहानी हो।</p>
  <br/>
  <p>मैं आपसे प्रेम करता हूँ,</p>
  <p>आज भी, कल भी, हमेशा... 💕</p>
</div>

          <div className={styles.navigationButtons}>
            <button className={styles.continueButton} onClick={() => setShowPoem(false)}>
              आगे बढ़ें →
            </button>
            <button className={styles.homeButton} onClick={handleHome}>
              🏠 होम
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!started) {
    return (
      <div className={styles.container}>
        <div className={styles.startCard}>
          <h1 className={styles.title}>💝 हमारे प्रेम की यात्रा 💝</h1>
          <p className={styles.subtitle}>हैप्पी वैलेंटाइन डे, मेरा खरगोश!</p>
          <p className={styles.description}>
            मैंने आज आपके लिए कुछ खास तैयार किया है।<br/>
            हमारे बारे में इन सवालों के जवाब दो और जानो<br/>
            कि आप मेरे लिए कितनी खास हो...
          </p>
          <button className={styles.startButton} onClick={() => setStarted(true)}>
            हमारी यात्रा शुरू करें ❤️
          </button>
        </div>
      </div>
    )
  }

  if (currentStage >= stages.length) {
    return (
      <div className={styles.container}>
        <div className={styles.finalCard}>
          <h1 className={styles.finalTitle}>🌹 आपने पूरा कर लिया! 🌹</h1>
          <p className={styles.finalMessage}>
            हर सवाल, हर याद, हर पल जो मैंने आपके साथ बिताया<br/>
            मेरी जिंदगी की सबसे बड़ी नेमत है।<br/><br/>
            आप मेरी सबसे अच्छी दोस्त, मेरी जीवनसाथी, मेरी दुनिया हो।<br/><br/>
            मेरे जीवन में आने के लिए धन्यवाद,<br/>
            मुझे प्यार करने के लिए धन्यवाद,<br/>
            और हर दिन को वैलेंटाइन डे जैसा बनाने के लिए धन्यवाद।<br/><br/>
            मैं आपसे शब्दों से भी ज़्यादा प्यार करता हूँ।<br/><br/>
            हैप्पी वैलेंटाइन डे! 💕
          </p>
          <div className={styles.hearts}>❤️ 💕 💖 💗 💝</div>
          <div className={styles.navigationButtons}>
            <button className={styles.homeButton} onClick={handleHome}>
              🏠 फिर से शुरू करें
            </button>
          </div>
        </div>
      </div>
    )
  }

  const stage = stages[currentStage]
  const isLastStage = currentStage === stages.length - 1

  return (
    <div className={styles.container}>
      {showWrongPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowWrongPopup(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.popupTitle}>💭 हम्म...</h2>
            <p className={styles.popupMessage}>फिर से सोचो देवी!</p>
            <button className={styles.popupButton} onClick={() => setShowWrongPopup(false)}>
              ठीक है ❤️
            </button>
          </div>
        </div>
      )}
      
      <div className={styles.progress}>
        चरण {currentStage + 1} / {stages.length}
      </div>
      
      <div className={styles.card}>
        {!showMessage ? (
          <>
            <h2 className={styles.question}>{stage.question}</h2>
            <div className={styles.options}>
              {stage.options.map((option, index) => (
                <button
                  key={index}
                  className={styles.option}
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className={styles.navigationButtons}>
              {currentStage > 0 && (
                <button className={styles.backButton} onClick={handleBack}>
                  ← पीछे जाएं
                </button>
              )}
              <button className={styles.homeButton} onClick={handleHome}>
                🏠 होम
              </button>
            </div>
          </>
        ) : (
          <div className={styles.messageCard}>
            <h2 className={styles.correctMessage}>✨ बिल्कुल सही! ✨</h2>
            <p className={styles.loveMessage}>{stage.message}</p>
            {isLastStage && (
              <>
                <div className={styles.navigationButtons}>
                  <button className={styles.backButton} onClick={handleBack}>
                    ← पीछे जाएं
                  </button>
                  <button className={styles.homeButton} onClick={handleHome}>
                    🏠 होम
                  </button>
                </div>
                <button className={styles.specialButton} onClick={() => setShowPoem(true)}>
                  आपके लिए खास 💝
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
