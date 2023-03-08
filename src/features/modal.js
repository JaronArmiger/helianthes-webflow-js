import gsap from 'gsap'
import $ from 'jquery'

const modalCode = () => {
  let modal = $('.modal_component'),
    modalContent = $('.modal_content'),
    modalBg = $('.modal_bg'),
    gifSrc = '',
    modalGif = $('.modal_gif'),
    resourceTitle,
    modalTitle = $('.modal_title'),
    resourceHref,
    modalLiveLink = $('.modal_live-link')

  modal.hide()

  let tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.25,
    },
  })

  tl.set(modal, { display: 'block' })
  tl.fromTo(modalBg, { opacity: 0 }, { opacity: 1 }, 0)
  tl.fromTo(modalContent, { y: '18%', opacity: 0 }, { y: '0%', opacity: 1 }, 0)

  $(document).on('click', '.resources_link', function (e) {
    e.preventDefault()
    tl.restart()
    gifSrc = $(this).find('.is-gif').attr('src')
    resourceTitle = $(this).find('.resource_title').text()
    resourceHref = $(this).attr('href')

    modalLiveLink.attr('href', resourceHref)
    modalTitle.text(resourceTitle)
    modalGif.attr('src', gifSrc)
  })

  modalBg.on('click', function () {
    tl.reverse()
  })
  $('.modal_close').on('click', function () {
    tl.reverse()
  })
}

export default modalCode
