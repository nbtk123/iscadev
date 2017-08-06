var images = ['adi_chiki.jpg', 'arielle_ankri.jpg', 'aviad_hahami.jpg', 'ben_rosemblaum.jpg',
 'chenli_haetzni.jpg', 'chirelle_chekroune.jpg', 'dudu_zozin.jpg', 'eden_brull.jpg',
 'elianna_rosenstein.jpg', 'gabriella_rolnik.jpg', 'hila_ben_hamou.jpg', 'klil_kimchi.jpg',
 'leehe_friedman.jpg', 'lior_tzahi.jpg', 'maya_ben_aris.jpg', 'miki_mazur.jpg', 'Naomi_henkel_guembel.jpg',
 'nathalie_klener.jpg', 'nitzan_bigman.jpg', 'ori_avraham.jpg', 'or_briga.jpg', 'rachel_guetta.jpg', 'roy_kerem.jpg',
'shani_dahan.jpg', 'shay_goldman.jpg', 'vincent_yrhi.jpg', 'yona_narboni.jpg', 'yuval_ziv.jpg']



export var studentlist = images.map(image => {
  return {
    name: image.replace('_',' ').replace('.jpg','').replace(/\b\w/g, l => l.toUpperCase()),
    imgsrc: require("../../../public/students/"+image)
  }
})