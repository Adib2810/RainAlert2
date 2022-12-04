const Main = () => {
    return(
    `
    <a href="#Two">
    <main class="welcome" >
        <img src="./img/bi_cloud-hail.png" alt=""  >
        
            <div class="welcome__rain_img">
                <img src="./assets/images/rond.png" alt="">
            </div>

            <div class="welcome__rain">
                <h1>RainAlert</h1>
           <p>Préparez-vous pour la pluie</p>
        </div>
</main>
</a>

<main class="mainTwo" id="Two"> 

 <div class="mainTwo__top">

     <div class="mainTwo__top__rain_img2">
          <img src="./assets/images/rond2.png" alt="">
    </div>

     <div class="mainTwo__top__rain2">
        <h1 class="mainTwo__top__rain2__txt">RainAlert</h1>
    </div>
</div>

    <section class="mainTwo__section">
        <div class="mainTwo__section__searchDiv">
        <img src="./assets/images/clarity_map-marker-line.png" alt="">     
            <input type="text" placeholder="Paris,FR" name="Paris,FR">
                <a href=""><img src="./assets/images/searchblack.png" alt=""></a>
            </form>
            </div>
        </div>
    </section>

        <section class="mainTwo__degree">
            
            <div class="mainTwo__degree__pluie"> <img src="./assets/images/bi_cloud-drizzle.png" alt="">
            </div>
                <div class="mainTwo__degree__nombre">  <p>20°C</p> </div>
        </section>

            <section class="mainTwo__texte"> <div class="mainTwo__texte__p">
                <p>La pluie se termine dans 1h45</p>
                </div> 
            </section>

                <section class="mainTwo__graph">
                    <div class="mainTwo__graph__precipitations">              
                        <div class="mainTwo__graph__precipitations__top">
                            <h1>Précipitations</h1> <h1> Fiabilité</h1> <h2 class="mainTwo__graph__precipitations__top__pourc"> 90%</h2>
                        </div>
                         <div class="mainTwo__graph__precipitations__bot">
                            <div class="mainTwo__graph__precipitations__bot__left">
                                    <div class="mainTwo__graph__precipitations__bot__left__goutte">
                                        <img src="../src/assets/images/goutte3.png" alt=""> Fortes 
                                        <img src="../src/assets/images/goutte2.png" alt=""> Moyennes 
                                        <img src="../src/assets/images/goutte.png" alt=""> Faibles
                                    </div>
                            </div>
                            <div class="mainTwo__graph__precipitations__bot__right">
                                <div class="mainTwo__graph__precipitations__bot__right__graph">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <section class="mainTwo__number">
                <div class="mainTwo__number__rangee">
                    <p>12:02</p>
                    <p>13:00</p>
                    <p>14:00</p>
                    <p>15:00</p>
                </div>
            </section>

</main>



<main class="mainThree" id="Three">
            <div class="mainTwo__top">
    
            <div class="mainTwo__top__rain_img2">
                <img src="./assets/images/rond2.png" alt="">
        </div>

            <div class="mainTwo__top__rain2">
            <h1 class="mainTwo__top__rain2__txt">RainAlert</h1>
        </div>

    </div>  

        <div class="mainThree__contour">
            <div class="mainThree__contour__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5665357.334650705!2d-3.228515970782623!3d46.105172710701765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sbe!4v1670183907993!5m2!1sfr!2sbe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <footer class="bottom">
        <div class="bottom__prevision">
        
          <div class="bottom__prevision__img">
             <img src="./assets/images/bi_cloud.png" alt="">
             </div>
            <div>
                <a  href="#Two"> Précipitations</a>
            </div>
         </div>
        <div class="bottom__carte">
            <div class="bottom__carte__carteImg">
                <img src="./assets/images/map.png" alt="">
            </div>
            <div>
                <a  href="#Three"> Carte</a>
            </div>
        </div>
        </footer>

`
    )
}

export default Main 