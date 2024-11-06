fetch('json/users.json')
  .then(response => response.json())
  .then(users => {
    const sellers = users.filter(user => user.is_seller);
    const carouselInner = document.getElementById('best-sellers-carousel-inner');
    const indicators = document.querySelector('#best-sellers-carousel .carousel-indicators');

    const itemsPerSlide = 4; // Número de vendedores por slide

    for (let i = 0; i < sellers.length; i += itemsPerSlide) {
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      if (i === 0) carouselItem.classList.add('active');

      const row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-4 g-2';

      for (let j = i; j < i + itemsPerSlide && j < sellers.length; j++) {
        const col = document.createElement('div');
        col.className = 'col';

        const sellerCard = document.createElement('seller-card');
        sellerCard.seller = sellers[j];

        col.appendChild(sellerCard);
        row.appendChild(col);
      }

      carouselItem.appendChild(row);
      carouselInner.appendChild(carouselItem);

      // Adicionar indicador do carrossel
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.dataset.bsTarget = '#best-sellers-carousel';
      indicator.dataset.bsSlideTo = Math.floor(i / itemsPerSlide);
      if (i === 0) indicator.classList.add('active');
      indicators.appendChild(indicator);
    }
  })
  .catch(error => console.error('Erro ao carregar os vendedores:', error));