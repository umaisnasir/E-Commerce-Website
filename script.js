const products=[
{id:'f1',collection:'EcomX Men',name:'Olive Embroidered Cotton Kurta',category:'men',fabric:'Cotton',price:4990,image:'img/products/f1.jpg',badge:'New'},
{id:'f2',collection:'Heritage Collection',name:'Midnight Black Wash-and-Wear Suit',category:'men',fabric:'Wash-and-wear',price:7490,image:'img/products/f2.jpg',badge:'Trending'},
{id:'f3',collection:'Festive Edit',name:'Rust Textured Festive Kurta',category:'men',fabric:'Cotton blend',price:5950,image:'img/products/f3.jpg',badge:'Limited'},
{id:'f4',collection:'EcomX Men',name:'Black and Gold Formal Waistcoat',category:'men',fabric:'Jacquard',price:9990,image:'img/products/f4.jpg',badge:'Festive'},
{id:'f5',collection:'EcomX Women',name:'Emerald Lawn Three-Piece',category:'women',fabric:'Lawn',price:8990,image:'img/products/f5.jpg',badge:'New'},
{id:'f6',collection:'Everyday Pret',name:'Ivory Jacquard Pret Set',category:'women',fabric:'Jacquard',price:12500,image:'img/products/f6.jpg',badge:'Premium'},
{id:'f7',collection:'Summer Lawn',name:'Tangerine Printed Summer Kurti',category:'women',fabric:'Lawn',price:2990,image:'img/products/f7.jpg',badge:'Fresh'},
{id:'f8',collection:'Premium Eastern',name:'Sage Green Linen Co-ord',category:'women',fabric:'Linen',price:6490,image:'img/products/f8.jpg',badge:'Trending'},
{id:'n1',collection:'EcomX Women',name:'Rose Chiffon Festive Suit',category:'women',fabric:'Chiffon',price:11990,image:'img/products/n1.jpg',badge:'Festive'},
{id:'n2',collection:'EcomX Men',name:'Sand Cotton Casual Co-ord',category:'men',fabric:'Cotton',price:4490,image:'img/products/n2.jpg',badge:'New'},
{id:'n3',collection:'Heritage Collection',name:'Navy Embroidered Kurta Set',category:'men',fabric:'Cotton',price:6990,image:'img/products/n3.jpg',badge:'Limited'},
{id:'n4',collection:'Everyday Pret',name:'Pearl Printed Shalwar Kameez',category:'women',fabric:'Cotton',price:5490,image:'img/products/n4.jpg',badge:'Everyday'},
{id:'n5',collection:'Summer Lawn',name:'Mint Lawn Two-Piece Suit',category:'women',fabric:'Lawn',price:4990,image:'img/products/n5.jpg',badge:'Fresh'},
{id:'n6',collection:'EcomX Men',name:'Charcoal Wash-and-Wear Kameez',category:'men',fabric:'Wash-and-wear',price:5990,image:'img/products/n6.jpg',badge:'Essential'},
{id:'n7',collection:'Festive Edit',name:'Maroon Eastern Waistcoat',category:'men',fabric:'Jacquard',price:8490,image:'img/products/n7.jpg',badge:'Festive'},
{id:'n8',collection:'Premium Eastern',name:'Sapphire Embroidered Pret Kurti',category:'women',fabric:'Linen',price:3990,image:'img/products/n8.jpg',badge:'New'}
];
const formatPKR=n=>`PKR ${Number(n).toLocaleString('en-PK')}`;
const getCart=()=>JSON.parse(localStorage.getItem('ecomxCart')||'[]');
const setCart=cart=>{localStorage.setItem('ecomxCart',JSON.stringify(cart));updateCartCount();};
const updateCartCount=()=>document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=getCart().reduce((s,i)=>s+i.qty,0));
function addToCart(id,qty=1,size='Medium'){const p=products.find(x=>x.id===id);if(!p)return;const cart=getCart();const key=x=>x.id===id&&x.size===size;const existing=cart.find(key);if(existing)existing.qty+=qty;else cart.push({id,size,qty});setCart(cart);}
function card(p){return `<article class="product-card"><a href="sproduct.html" aria-label="View ${p.name}"><span class="badge">${p.badge}</span><div class="image"><img src="${p.image}" alt="${p.name} placeholder product image" loading="lazy"></div></a><div class="meta"><span>${p.collection} · ${p.fabric}</span><h3>${p.name}</h3><div class="stars" aria-label="Rated 5 out of 5">★★★★★</div><p class="price">${formatPKR(p.price)}</p></div><button class="cart-btn" data-add="${p.id}" aria-label="Add ${p.name} to cart"><i class='bx bx-cart'></i></button></article>`}
function renderGrid(el,list){el.innerHTML=list.map(card).join('');}
function initGrids(){document.querySelectorAll('[data-product-grid]').forEach(el=>{const type=el.dataset.productGrid;let list=products;if(type==='featured')list=products.slice(0,8);if(type==='new')list=products.slice(8);if(type==='related')list=products.slice(1,5);renderGrid(el,list);});}
function initCatalogue(){const grid=document.querySelector('[data-product-grid="catalogue"]');if(!grid)return;const buttons=[...document.querySelectorAll('.filter')],search=document.getElementById('search-products'),sort=document.getElementById('sort-products'),count=document.getElementById('product-count'),empty=document.querySelector('.empty-state');let category=new URLSearchParams(location.search).get('category')||'all';function apply(){buttons.forEach(b=>b.classList.toggle('active',b.dataset.category===category));let list=products.filter(p=>category==='all'||p.category===category);const q=(search.value||'').toLowerCase();if(q)list=list.filter(p=>(p.name+p.collection+p.fabric).toLowerCase().includes(q));if(sort.value==='low')list=[...list].sort((a,b)=>a.price-b.price);if(sort.value==='high')list=[...list].sort((a,b)=>b.price-a.price);renderGrid(grid,list);count.textContent=`${list.length} product${list.length===1?'':'s'} shown`;empty.hidden=list.length>0;}buttons.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.category;apply();}));search.addEventListener('input',apply);sort.addEventListener('change',apply);apply();}
function initNav(){
  const toggle=document.getElementById('bar');
  const nav=document.getElementById('navbar');
  if(!toggle||!nav)return;

  toggle.classList.add('menu-toggle');

  let overlay=document.querySelector('.nav-overlay');
  if(!overlay){
    overlay=document.createElement('button');
    overlay.type='button';
    overlay.className='nav-overlay';
    overlay.setAttribute('aria-label','Close navigation menu');
    document.body.appendChild(overlay);
  }

  const mobileQuery=window.matchMedia('(max-width: 900px)');

  const setOpen=(open)=>{
    const shouldOpen=Boolean(open&&mobileQuery.matches);

    nav.classList.toggle('active',shouldOpen);
    overlay.classList.toggle('active',shouldOpen);
    document.body.classList.toggle('nav-open',shouldOpen);
    document.documentElement.classList.toggle('nav-open',shouldOpen);

    toggle.setAttribute('aria-expanded',String(shouldOpen));
    toggle.setAttribute('aria-label',shouldOpen?'Close menu':'Open menu');

    const icon=toggle.querySelector('i');
    if(icon){
      icon.classList.toggle('bx-menu',!shouldOpen);
      icon.classList.toggle('bx-x',shouldOpen);
    }
  };

  toggle.addEventListener('click',(event)=>{
    event.preventDefault();
    event.stopPropagation();
    setOpen(toggle.getAttribute('aria-expanded')!=='true');
  });

  overlay.addEventListener('click',()=>setOpen(false));

  nav.querySelectorAll('a').forEach((link)=>{
    link.addEventListener('click',()=>setOpen(false));
  });

  document.addEventListener('keydown',(event)=>{
    if(event.key==='Escape')setOpen(false);
  });

  const resetForViewport=()=>{
    if(!mobileQuery.matches)setOpen(false);
  };

  if(typeof mobileQuery.addEventListener==='function'){
    mobileQuery.addEventListener('change',resetForViewport);
  }else{
    mobileQuery.addListener(resetForViewport);
  }

  window.addEventListener('pageshow',()=>setOpen(false));
  setOpen(false);
}
function initFaq(){
  const questions=[...document.querySelectorAll('.faq-question')];
  if(!questions.length)return;

  const setState=(button,isOpen)=>{
    const panel=document.getElementById(button.getAttribute('aria-controls'));
    if(!panel)return;

    button.setAttribute('aria-expanded',String(isOpen));
    panel.setAttribute('aria-hidden',String(!isOpen));
    panel.classList.toggle('open',isOpen);

    if(isOpen){
      panel.style.maxHeight=`${panel.scrollHeight}px`;
    }else{
      panel.style.maxHeight='0px';
    }
  };

  // Every answer must be fully collapsed when the page first loads.
  questions.forEach(button=>setState(button,false));

  questions.forEach(button=>{
    button.addEventListener('click',()=>{
      const willOpen=button.getAttribute('aria-expanded')!=='true';

      // Keep only one FAQ open at a time.
      questions.forEach(other=>setState(other,false));
      if(willOpen)setState(button,true);
    });
  });

  window.addEventListener('resize',()=>{
    questions.forEach(button=>{
      if(button.getAttribute('aria-expanded')==='true'){
        const panel=document.getElementById(button.getAttribute('aria-controls'));
        if(panel)panel.style.maxHeight=`${panel.scrollHeight}px`;
      }
    });
  });
}
function initForms(){document.querySelectorAll('.newsletter-form,.contact-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('.form-status');if(!form.checkValidity()){status.textContent='Please complete the required fields with valid information.';form.reportValidity();return;}status.textContent=form.classList.contains('contact-form')?'Demo message validated. No server submission is configured.':'Thanks! Demo signup validated locally.';form.reset();}));}
function initDetail(){document.querySelectorAll('.small-img').forEach(img=>img.addEventListener('click',()=>{const main=document.getElementById('MainImg');if(main)main.src=img.src;}));const btn=document.getElementById('detail-add');if(btn)btn.addEventListener('click',()=>{const qty=Math.max(1,parseInt(document.getElementById('qty').value,10)||1),size=document.getElementById('size').value,status=document.querySelector('.product-info .form-status');if(!size){status.textContent='Please select a size before adding to cart.';return;}addToCart(btn.dataset.productId,qty,size);status.textContent=`Added ${qty} item(s) in ${size} to your cart.`;});}
function renderCart(){const wrap=document.getElementById('cart-items');if(!wrap)return;let cart=getCart();if(!cart.length){wrap.innerHTML='<div class="empty-state"><h2>Your cart is empty.</h2><p>Add Pakistani eastern wear from the catalogue to see totals here.</p><a class="btn primary" href="shop.html">Continue Shopping</a></div>';}else wrap.innerHTML=cart.map((item,i)=>{const p=products.find(x=>x.id===item.id);return `<div class="cart-row"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${item.size} · ${formatPKR(p.price)}</p><div class="qty-controls"><button data-dec="${i}" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-inc="${i}" aria-label="Increase quantity">+</button><button class="remove-btn" data-remove="${i}">Remove</button></div></div><div><strong>${formatPKR(p.price*item.qty)}</strong></div></div>`}).join('');const subtotal=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0),delivery=subtotal?350:0;document.getElementById('cart-subtotal').textContent=formatPKR(subtotal);document.getElementById('cart-delivery').textContent=formatPKR(delivery);document.getElementById('cart-total').textContent=formatPKR(subtotal+delivery);wrap.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;let c=getCart();if(t.dataset.inc)c[t.dataset.inc].qty++;if(t.dataset.dec)c[t.dataset.dec].qty=Math.max(1,c[t.dataset.dec].qty-1);if(t.dataset.remove)c.splice(t.dataset.remove,1);setCart(c);renderCart();},{once:true});document.getElementById('checkout-btn')?.addEventListener('click',()=>document.querySelector('.cart-summary .form-status').textContent='Checkout is a front-end template demo. Connect a payment backend to continue.');}
document.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b){e.preventDefault();addToCart(b.dataset.add,1,'Medium');b.innerHTML='<i class="bx bx-check"></i>';setTimeout(()=>b.innerHTML='<i class="bx bx-cart"></i>',900);}});
initNav();initGrids();initCatalogue();initFaq();initForms();initDetail();renderCart();updateCartCount();
