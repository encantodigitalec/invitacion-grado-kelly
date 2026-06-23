
        const openingScreen = document.getElementById("openingScreen");
        		    const openInvitation = document.getElementById("openInvitation");
        		    const invitationWrapper = document.getElementById("invitationWrapper");
        		    const invitationContent = document.querySelector(".content");
        
        			/* =========================================================
           MÚSICA PARAMETRIZABLE
           Archivo usado: audio/cancion.mp3
           ========================================================= */
        const weddingAudio = document.getElementById("weddingAudio");
        const musicButton = document.getElementById("musicButton");
        
        const musicConfig = {
          volume: 0.42,
          loop: true
        };
        
        if (weddingAudio) {
          weddingAudio.volume = musicConfig.volume;
          weddingAudio.loop = musicConfig.loop;
        }
        
        function playWeddingMusic() {
          if (!weddingAudio) return;
        
          weddingAudio.play().catch(() => {
            console.log("El navegador bloqueó la reproducción del audio.");
          });
        }
        
        function toggleWeddingMusic() {
          if (!weddingAudio || !musicButton) return;
        
          if (weddingAudio.paused) {
            weddingAudio.play();
            musicButton.classList.remove("is-paused");
            musicButton.textContent = "♪";
          } else {
            weddingAudio.pause();
            musicButton.classList.add("is-paused");
            musicButton.textContent = "×";
          }
        }
        
        if (musicButton) {
          musicButton.addEventListener("click", toggleWeddingMusic);
        }
        		
        		    if ("scrollRestoration" in history) {
        		      history.scrollRestoration = "manual";
        		    }
        		
        		    function resetInvitationScroll() {
        		      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        		
        		      if (invitationContent) {
        		        invitationContent.scrollTo({ top: 0, left: 0, behavior: "auto" });
        		      }
        		    }
        		
        		    window.addEventListener("load", resetInvitationScroll);
        		    window.addEventListener("pageshow", resetInvitationScroll);
        		
        		    openInvitation.addEventListener("click", () => {
        			resetInvitationScroll();
        			playWeddingMusic();
        			openingScreen.classList.add("open-envelope");
        
        			setTimeout(() => {
        			resetInvitationScroll();
        			openingScreen.classList.add("hide");
        			invitationWrapper.classList.add("show");
        			}, 850);
        			});
        		
        		    /* =========================================================
        		   UBICACIÓN PARAMETRIZABLE
        		   Cambia estos valores por las coordenadas reales.
        		   ========================================================= */
        		const mapConfig = {
        		  latitude: -2.915938,
        		  longitude: -79.035688,
        		  zoom: 17,
        		  addressText: "Lugar de la fiesta · Ciudad"
        		};
        		
        		const openMapModal = document.getElementById("openMapModal");
        		const closeMapModal = document.getElementById("closeMapModal");
        		const mapModal = document.getElementById("mapModal");
        		const mapIframe = document.getElementById("mapIframe");
        		const openGoogleMaps = document.getElementById("openGoogleMaps");
        		const mapAddressText = document.getElementById("mapAddressText");
        		
        		function buildMapLinks() {
        		  const { latitude, longitude, zoom, addressText } = mapConfig;
        		
        		  const embedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
        		  const externalUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        		
        		  mapIframe.src = embedUrl;
        		  openGoogleMaps.href = externalUrl;
        		  if (mapAddressText) {
        			mapAddressText.textContent = addressText;
        			}
        		}
        		
        		function showMapModal() {
        		buildMapLinks();
        		mapModal.classList.add("show");
        		mapModal.setAttribute("aria-hidden", "false");
        		document.body.style.overflow = "hidden";
        		}
        		
        		function hideMapModal() {
        		mapModal.classList.remove("show");
        		mapModal.setAttribute("aria-hidden", "true");
        		document.body.style.overflow = "";
        		}
        		
        		if (openMapModal) {
        		  openMapModal.addEventListener("click", showMapModal);
        		}
        		
        		if (closeMapModal) {
        		  closeMapModal.addEventListener("click", hideMapModal);
        		}
        		
        		if (mapModal) {
        		  mapModal.addEventListener("click", (event) => {
        		    if (event.target === mapModal) {
        		      hideMapModal();
        		    }
        		  });
        		}
        		   // fecha cuenta
        		    const birthdayDate = new Date("2026-07-11T21:00:00").getTime();
        		
        		    const elements = {
        		      days: document.getElementById("days"),
        		      hours: document.getElementById("hours"),
        		      minutes: document.getElementById("minutes"),
        		      seconds: document.getElementById("seconds")
        		    };
        		
        		    function updateCountdown() {
        		      const now = new Date().getTime();
        		      const distance = birthdayDate - now;
        		
        		      if (distance <= 0) {
        		        elements.days.textContent = "00";
        		        elements.hours.textContent = "00";
        		        elements.minutes.textContent = "00";
        		        elements.seconds.textContent = "00";
        		        return;
        		      }
        		
        		      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        		      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        		      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        		      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        		
        		      elements.days.textContent = String(days).padStart(2, "0");
        		      elements.hours.textContent = String(hours).padStart(2, "0");
        		      elements.minutes.textContent = String(minutes).padStart(2, "0");
        		      elements.seconds.textContent = String(seconds).padStart(2, "0");
        		    }
        		
        		    updateCountdown();
        		    setInterval(updateCountdown, 1000);
    