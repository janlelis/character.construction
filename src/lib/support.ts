import ClipboardJS from "clipboard"

export function scrollTo(href, cb) {
  if(window) {
    if(document.body.scrollIntoView) {
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      })
      if(cb){ setTimeout(cb, 200) }
    } else {
      window.location.href = href
      if(cb){ cb() }
    }
  }
}

export function registerScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener("click", function(event) {
      event.preventDefault()
      scrollTo(a.hash)
    })
  })
}

export function registerShake() {
  document.querySelectorAll('.n,.f,.g,.c, .b, .b2, .box, .h').forEach(function(e){
    var shakeInProgressTimeout = null
    e.addEventListener('click', function(){
      if(shakeInProgressTimeout){
        clearTimeout(shakeInProgressTimeout)
        shakeInProgressTimeout = null
        e.classList.remove('shake')
      } else {
        e.classList.add('shake')
        shakeInProgressTimeout = setTimeout(function(){
          e.classList.remove('shake')
          shakeInProgressTimeout = null
        }, 1400)
      }
    })
  })
}

export function registerLinkHeadings() {
  ['h2', 'h3'].forEach(function(h){
    document.querySelectorAll(h).forEach(function(e){
      e.innerHTML = '<a href="#' + e.id + '">' + e.innerHTML + '</a>'
    })
  })
}

export function registerClipboard() {
  new ClipboardJS('.c, .e, .f, .g, .n, .h', {
    text: function(trigger) {
      return trigger.textContent
    }
  }).on("success", function(e) {
    // console.log("copy: " + e.text)
  })

  new ClipboardJS('.b, .b2', {
    text: function(trigger) {
      return trigger.children[0].textContent
    }
  }).on("success", function(e) {
    // console.log("copy: " + e.text)
  })

  new ClipboardJS('.box', {
    text: function(trigger) {
      return trigger.textContent.trim()
    }
  }).on("success", function(e) {
    // console.log("copy: " + e.text)
  })
}

export function uPlus(n : number) {
  return `U+${n.toString(16).toUpperCase().padStart(4,"0")}`
}
