window.onload = (event) => {
  console.log('asdasd')
  $('.ref-links').on('click', e => {
    console.log(e.currentTarget)
    console.log(e.target)
    let data = new FormData();
    // data.append('ref-link')
    // axios.post('src/click.php', data, res => {

    // })
  })
}
Vue.component('item-producto', {
  props: ['producto'],
  template: `
    <div class="col-sm-6 row wow fadeInRight animated animated" style="visibility: visible;">
      <div class="col-sm-6">
            <div class="thumbnail">
                <img src="images/img_3.JPG" :alt="producto.name">
            </div>
      </div>
      <div class="col-sm-6">
        <h3 class="column-title">{{ producto.name}}</h3>
        <p>{{ producto.contenido }}</p>
      </div>
    </div>
  `
})

new Vue({
  el: '#vue_productos',
  data: function () {
    return {
      list_productos: [
        {name: 'Barniz', image: 'images/img_3.JPG', contenido: `Este producto  hecho con el aceite usado para freir (85%) y vinagre (15%)   ayudara a previene los hongos en la madera.
        A ser aceite y vinagre, supongo que no será tóxico y por tanto servirá para proteger jaulas 
        `},
        {name: 'Barniz', image: 'images/img_3.JPG', contenido: `Este producto  hecho con el aceite usado para freir (85%) y vinagre (15%)   ayudara a previene los hongos en la madera.
        A ser aceite y vinagre, supongo que no será tóxico y por tanto servirá para proteger jaulas 
        `},
        {name: 'Pintura', image: 'images/img_3.JPG', contenido: `Este producto elaborado con nuestra materia prima principal y otros compuestos, puede ser usado para realizar el pintado de sus paredes y al mismo tiempo, estarás contribuyendo a la disminución de la contaminacion en el planeta. 
        `},
        {name: 'Barniz', image: 'images/img_3.JPG', contenido: `Este producto  hecho con el aceite usado para freir (85%) y vinagre (15%)   ayudara a previene los hongos en la madera.
        A ser aceite y vinagre, supongo que no será tóxico y por tanto servirá para proteger jaulas 
        `},
        {name: 'Barniz', image: 'images/img_3.JPG', contenido: `Este producto  hecho con el aceite usado para freir (85%) y vinagre (15%)   ayudara a previene los hongos en la madera.
        A ser aceite y vinagre, supongo que no será tóxico y por tanto servirá para proteger jaulas 
        `},
        {name: 'Barniz', image: 'images/img_3.JPG', contenido: `Este producto  hecho con el aceite usado para freir (85%) y vinagre (15%)   ayudara a previene los hongos en la madera.
        A ser aceite y vinagre, supongo que no será tóxico y por tanto servirá para proteger jaulas 
        `},
        
      ]
    }
  },
  mounted: function () {

    axios.post('/src/visita.php', {
      ref: document.referrer
    }, res => {
      console.log(res)
    })
  }
})