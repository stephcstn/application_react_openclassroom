function Saison() {
    const currentMonth = new Date().getMonth();
    const isSummer = currentMonth >= 5 && currentMonth <= 8;
    
    if (isSummer) {
        return (
        <div className="lmj-banner-summer">
          🌞 C'est l'été, profitez-en pour acheter vos plantes ! 🌞
        </div>
        );
    } else {
        return (
        <div className="lmj-banner-winter">
          ❄️ C'est l'hiver, pensez à protéger vos plantes ! ❄️
        </div>
      )}
}

export default Saison;