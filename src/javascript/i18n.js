/* Tijuana Innovadora — motor de internacionalización
   Depende de: translations.js (debe cargarse antes) */

(function () {
  'use strict';

  var STORAGE_KEY = 'ti-lang';
  var DEFAULT_LANG = 'es';

  /* ─── Helpers ─── */
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function applyLang(lang) {
    var t = (window.TI_TRANSLATIONS || {})[lang] || {};

    /* 1. Swap text content de elementos con data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* 2. Swap atributos (aria-label, placeholder…)
          Formato: data-i18n-attr="aria-label:key,placeholder:key2" */
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var parts = pair.trim().split(':');
        if (parts.length < 2) return;
        var attr = parts[0].trim();
        var key  = parts.slice(1).join(':').trim();
        if (t[key] !== undefined) el.setAttribute(attr, t[key]);
      });
    });

    /* 3. Bandera: muestra la bandera del idioma de DESTINO
          (cuando estás en ES muestra US para cambiar a EN, y viceversa) */
    var targetLang = lang === 'es' ? 'en' : 'es';
    document.querySelectorAll('.lang-flag').forEach(function (img) {
      /* Reemplaza solo el nombre del archivo en la URL actual */
      if (targetLang === 'en') {
        img.src = img.src.replace('mx.svg', 'us.svg');
        img.alt = 'English';
      } else {
        img.src = img.src.replace('us.svg', 'mx.svg');
        img.alt = 'Español';
      }
    });

    /* 4. Etiqueta de idioma junto a la bandera */
    document.querySelectorAll('.lang-label').forEach(function (el) {
      el.textContent = targetLang === 'en' ? 'English' : 'Español';
    });

    /* 5. Atributo lang del documento */
    document.documentElement.lang = lang === 'es' ? 'es-MX' : 'en';
  }

  /* ─── API pública ─── */
  window.toggleLang = function () {
    var next = getLang() === 'es' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
  };

  /* ─── Auto-aplicar al cargar la página ─── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyLang(getLang());
    });
  } else {
    applyLang(getLang());
  }

})();
