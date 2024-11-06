fetch('json/products.json')
  .then(response => response.json())
  .then(products => {
    const promotedProducts = products.filter(product => product.has_discount);
    const carouselInner = document.getElementById('black-friday-carousel-inner');
    const indicators = document.querySelector('#black-friday-carousel .carousel-indicators');

    const itemsPerSlide = 4; // Número de itens por slide

    for (let i = 0; i < promotedProducts.length; i += itemsPerSlide) {
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      if (i === 0) carouselItem.classList.add('active');

      const row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-4 g-3'; // Classe atualizada

      for (let j = i; j < i + itemsPerSlide && j < promotedProducts.length; j++) {
        const col = document.createElement('div');
        col.className = 'col'; // Use 'col' sem o número para permitir responsividade

        const blackFridayCard = document.createElement('black-friday');
        blackFridayCard.product = promotedProducts[j];

        col.appendChild(blackFridayCard);
        row.appendChild(col);
      }

      carouselItem.appendChild(row);
      carouselInner.appendChild(carouselItem);

      // Adicionar indicador
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.dataset.bsTarget = '#black-friday-carousel';
      indicator.dataset.bsSlideTo = Math.floor(i / itemsPerSlide);
      if (i === 0) indicator.classList.add('active');
      indicators.appendChild(indicator);
    }
  })
  .catch(error => console.error('Erro ao carregar os produtos:', error));