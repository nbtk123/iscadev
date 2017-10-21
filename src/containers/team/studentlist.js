var images = ['adi_chiki.jpg', 'arielle_ankri.jpg', 'aviad_hahami.jpg', 'ben_rosemblaum.jpg',
 'chenli_haetzni.jpg', 'chirelle_chekroune.jpg', 'dudu_zozin.jpg', 'eden_brull.jpg',
 'elianna_rosenstein.jpg', 'gabriella_rolnik.jpg', 'hila_ben_hamou.jpg', 'klil_kimchi.jpg',
 'leehe_friedman.jpg', 'lior_tzahi.jpg', 'maya_ben_aris.jpg', 'miki_mazur.jpg', 'Naomi_henkel_guembel.jpg',
 'nathalie_klener.jpg', 'nitzan_bigman.jpg', 'ori_avraham.jpg', 'or_briga.jpg', 'rachel_guetta.jpg', 'roy_kerem.jpg',
'shani_dahan.jpg', 'shay_goldman.jpg', 'vincent_yrhi.jpg', 'yona_narboni.jpg', 'yuval_ziv.jpg']



// export var studentlist = images.map(image => {
//   return {
//     name: image.replace(/_/g,' ').replace('.jpg','').replace(/\b\w/g, l => l.toUpperCase()),
//     subtitle: "",
//     imgsrc: require("../../../public/students/"+image),
//     year: ""
//   }
// })

export var studentlist = [
{
    'name': 'Roy Meirom',
    'subtitle': 'Founder & Chairman',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/p240x240/15327395_10157786220500150_2326042848380465891_n.jpg?oh=2c28e610591ef335c0aff2b0fa6df95c&oe=5A874ADD',
    'year': ""
},
{
    'name': 'Tomer Aldubi',
    'subtitle': 'Director - ISCA scholarship Program',
    'imgsrc': require('../../../public/team_pics/tomer_aldubi.png'),
    'year': ""
},
{
    'name': 'Gideon Bachar',
    'subtitle': 'Program Advisor',
    'imgsrc': require('../../../public/team_pics/gideon_bachar.jpg'),
    'year': ""
},
{
    'name': 'Ido Daniel',
    'subtitle': 'Program Advisor',
    'imgsrc': require('../../../public/team_pics/ido_daniel.png'),
    'year': ""
},
{
    'name': 'Nir Barzilay',
    'subtitle': 'Tech Lead',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14708230_10209416908912484_2331691289157899122_n.jpg?oh=c880bd8635a961645cbf2529e5c3fe93&oe=5A8622BC',
    'year': '2017'
},
{
    'name': 'Ram Penkar',
    'subtitle': 'Program Coordinator',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/p240x240/15241371_10209096329258250_8328128397462744257_n.jpg?oh=af5dbea12d96857072b1bbed46e9b356&oe=5A70C752',
    'year': "2015"
},
{
    'name': 'Adi Goldshtein Harel',
    'subtitle': 'Program Coordinator',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/13537598_10154114328049017_8902878979492219202_n.jpg?oh=74137024a3a28c69aa6c76a552590a2e&oe=5A6E35A9',
    'year': "2016"
},
{
    'name': 'Chirelle Chekroune',
    'subtitle': 'Program Coordinator',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/11259437_1031543186875552_1879945431956141721_n.jpg?oh=d8943951c19b9f364a8c70da3058b92b&oe=5A7C545B',
    'year': "2017"
},
{
    'name': 'Bar Cohen',
    'subtitle': 'Program Coordinator',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/21764761_1678307175522397_8771246474723102330_n.jpg?oh=f05163d8404077e8c806aa75c76e0710&oe=5A82569F',
    'year': '2018'
},
{
    'name': 'Gabriela Rolnik',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/p240x240/11425242_457498594410924_7147612685855763735_n.jpg?oh=2687b6e28d0fb354a1343368065ffb55&oe=5A7D7232',
    'year': "2015"
},
{
    'name': 'Robert Solom',
    'subtitle': '',
    'imgsrc': require('../../../public/team_pics/man_default.png'),
    'year': "2015"
},
{
    'name': 'Miki Mazur',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/19959039_10209560296865546_7399357334157489131_n.jpg?oh=f98b7e14e41cc62493ddb36e28becae6&oe=5A6E9586',
    'year': "2015"
},
{
    'name': 'Lior Tsahi',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/c44.44.548.548/s240x240/548969_10200342394976931_964412807_n.jpg?oh=7a7eb4bb6a3fb0bbcd63982f1ef82db8&oe=5A7E93C0',
    'year': "2015"
},
{
    'name': 'Klil Kimhi',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/p240x240/20294169_10211936872911490_8956318454120040798_n.jpg?oh=04297fdf749bee2b049f1ce6ae6b946f&oe=5A73C9C4',
    'year': "2015"
},
{
    'name': 'Yona Narboni',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/19448_1331697605963_582177_n.jpg?oh=f5df3d9d82da5fbca646ebfcdde8c142&oe=5A74854D',
    'year': "2015"
},
{
    'name': 'Nathalie Klener',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/p240x240/20228698_10155409552791772_2573022238252257056_n.jpg?oh=81cb2a27ddff773aa13ebafaa436fbad&oe=5A74F5F6',
    'year': "2015"
},
{
    'name': 'Roy Kerem',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/p240x240/13254101_10153146368937824_1729225795150669783_n.jpg?oh=e763bd0485dcffa31b0468ba3ea42d76&oe=5A7E441D',
    'year': "2015"
},
{
    'name': 'Or Briga',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/c60.0.240.240/p240x240/13435382_10154296004929275_2419206132440237447_n.jpg?oh=174a4d02dbfa43ed5247f52c804271e4&oe=5A827D76',
    'year': "2015"
},
{
    'name': 'Vincent Yrhi',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/1208911_10151651119605918_1698442881_n.jpg?oh=67a9a41d9e81d1ab9d973bbb8e90f4d5&oe=5A80FD9A',
    'year': "2015"
},
{
    'name': 'Chenli Haetzni',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/11391370_10152776414896891_6084189896266090958_n.jpg?oh=0cd5b3e281525d49a74fa3a2ec2cad9d&oe=5A71EB0E',
    'year': "2015"
},
{
    'name': 'Leehe Friedman',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/c0.27.240.240/p240x240/10314559_10152414487921411_8807415263508965892_n.jpg?oh=f27f5d896f8a0b91b201350201ea6575&oe=5A4051BA',
    'year': "2015"
},
{
    'name': 'Shani Dahan',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/p240x240/15078698_10154699744178134_8769021997385772100_n.jpg?oh=5077b20fd868edc671f8859defbe5672&oe=5A82BB07',
    'year': '2016'
},
{
    'name': 'Nomi Cooper-Rosenberg',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/p240x240/17498808_10158377749565514_1336849481362037642_n.jpg?oh=fa44b935a4e9bd3df9ad7b7c326dd2b1&oe=5A42E8D9',
    'year': '2016'
},
{
    'name': 'Avihai Levin',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/19884488_1470286849684270_4277286671488220865_n.jpg?oh=600f3195a0e95b6d7bbabad440896505&oe=5A70B8F1',
    'year': '2016'
},
{
    'name': 'Tomer Ziv',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/22366632_1659319694098479_772113522397590806_n.jpg?oh=2aec655e1e3415284bc65170b3dd619b&oe=5A788D59',
    'year': '2016'
},
{
    'name': 'Yuval Ziv',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/22279548_1901386086554856_3345807063032660409_n.jpg?oh=567cd64ef7ad3816aa1e4872654b86f9&oe=5A781DA2',
    'year': '2016'
},
{
    'name': 'Ester Nieznanovski',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/p240x240/22279511_1688944151118843_23501979657402639_n.jpg?oh=4c96192f199ffd6f0c896c38569c1b4c&oe=5A70F324',
    'year': '2016'
},
{
    'name': 'Caroline Benedict',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/c0.15.240.240/p240x240/12191745_10206519710745662_1120962762109643735_n.jpg?oh=f70afe8b76f53ec02050e8769acda0ba&oe=5A3F5F3C',
    'year': '2016'
},
{
    'name': 'Adi Chiki',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/p240x240/12115504_10206774769081938_4430386559734773482_n.jpg?oh=74b02e29127374e213c497bb06a8f92b&oe=5A7942DB',
    'year': '2016'
},
{
    'name': 'Elianna Rosenstein',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/18893181_10213747955359528_8145753896824392265_n.jpg?oh=2ea3299d438011793a250d9a38e80c78&oe=5A81D953',
    'year': '2016'
},
{
    'name': 'Kayla Dolin',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/p240x240/21192849_3631931041379_6005024181601720151_n.jpg?oh=072a9f9de764968b943c49032e687817&oe=5A73B7CB',
    'year': '2016'
},
{
    'name': 'Eden Brull',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/p240x240/13709866_10209606515501294_2071635389312483614_n.jpg?oh=8a08ed7a86207d196134a41c508c4805&oe=5A40E5E3',
    'year': '2016'
},
{
    'name': 'Margaux Allouch',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/p240x240/13237826_10156947864825268_8483566982117931986_n.jpg?oh=f73b11610bb65cfced43e9bdf0839c0b&oe=5A886B1A',
    'year': '2016'
},
{
    'name': 'Nitzan Bigman',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/c1.0.240.240/p240x240/22221855_10159389075250333_6023669215232550300_n.jpg?oh=80045c35bb689b78a21b7d39b570fb86&oe=5A3A22CF',
    'year': '2016'
},
{
    'name': 'Ori Avraham',
    'subtitle': '',
    'imgsrc': 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-1/p240x240/12140617_10153910954939453_475789380564666570_n.jpg?oh=b25a57a27cbc9c28ecf5e7ccb21bb5a1&oe=5A3D3F52',
    'year': '2016'
},
{
    'name': 'Rosemblaum Ben',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14479657_10153993064635679_6746494310271908038_n.jpg?oh=58c4d2ec0a1c32d2cef25119385f77ca&oe=5A78379A',
    'year': '2016'
},
{
    'name': 'Ro Oranim',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/16998836_10212671893210116_8390976900250427055_n.jpg?oh=c3444c878685c727fad72b8de07446ae&oe=5A3EE8DD',
    'year': '2016'
},
{
    'name': 'Auren Renford',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/39468_420412878393_3358427_n.jpg?oh=41f2d8292c15cd63d7209031f7f5b1e7&oe=5A3B40BF',
    'year': '2016'
},
{
    'name': 'Shay Goldman',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/13567400_10154264086672145_3823900997847640197_n.jpg?oh=025ed732e4f1e0dc5107c29e408ec820&oe=5A702D66',
    'year': '2016'
},
{
    'name': 'Maya Ben Aris',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/17903656_10155181390698050_3241726414459546704_n.jpg?oh=bcc69a52610b8769442880a733aed30f&oe=5A79DF38',
    'year': '2016'
},
{
    'name': 'Dudu Zozin',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12243027_10153697001257988_6554122308587187848_n.jpg?oh=74a88eaf725c5c52347e6097c95be05f&oe=5A7410DD',
    'year': '2016'
},
{
    'name': 'Rachel Luli Guetta',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/1467493_10152125886270757_812759149_n.jpg?oh=2aad8623e47dfbe8c6b39257cff54b94&oe=5A44B939',
    'year': '2016'
},
{
    'name': 'Arielle Ankri',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/18193931_1401329046628078_1916696910833270083_n.jpg?oh=4f39026dbb55e0508a0d59383abe0894&oe=5A40C8BD',
    'year': '2016'
},
{
    'name': 'Hila Ben Hamou',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/15253509_10207576678598332_854891219244501497_n.jpg?oh=0f6d0b4992bbfb3bac5020da5821fa28&oe=5A3D5323',
    'year': '2016'
},
{
    'name': 'Barak Ben Hakon',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-1/c79.721.1324.1324/456630_142433285892587_385681078_o.jpg?oh=b798db69720fa388d630379c5a955e72&oe=5A836492',
    'year': '2017'
},
{
    'name': 'Shay Aviani',
    'subtitle': '',
    'imgsrc': 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/12341492_1202150736468208_2817346122286541041_n.jpg?oh=eeb1da7f40f2ba66fba00cd8f13a8188&oe=5A826F69',
    'year': '2017'
},
{
    'name': 'Tal Angert',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/1474448_686968277980939_1033159893_n.jpg?oh=2933b60accb09397cef01be473bffd9f&oe=5A444ECB',
    'year': '2017'
},
{
    'name': 'Efrat Baron',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14364896_10210754556931067_2040737007969246327_n.jpg?oh=589211a815e1eee59a2af17f0711c409&oe=5A39E4F3',
    'year': '2017'
},
{
    'name': 'Schnarch Douieb Anat',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-1/c436.94.1177.1177/322175_2324336917984_1533543816_o.jpg?oh=8193011005d99281c32e3e391edbcf43&oe=5A3B8AB1',
    'year': '2017'
},
{
    'name': 'Shachar Sharon',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/21231296_10214652412332285_5401648084286028728_n.jpg?oh=c37282e6fc8e431099206947eedf582b&oe=5A42ECC0',
    'year': '2017'
},
{
    'name': 'Inesa Bass',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/10420264_10202346544769447_6227224139290892660_n.jpg?oh=aa2cdf9eb10e9ead3bf333530d56ffc6&oe=5A8485DF',
    'year': '2017'
},
{
    'name': 'Yoav Bermand',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14022247_10210352601794250_8721432338576436287_n.jpg?oh=609bd96734dd66fb42a71b3f4b1a67e1&oe=5A8230BA',
    'year': '2017'
},
{
    'name': 'Galia Weinstein',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/17361878_10212488050175514_3322930040916298907_n.jpg?oh=e84ce97425f0477c7a81d8c43d2e3ae7&oe=5A80A06F',
    'year': '2017'
},
{
    'name': 'Erez Opatovsky',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/17991150_10213062561497507_5338272017256789260_n.jpg?oh=7a2451081ba1613d0d7aef26284cb3b3&oe=5A79047A',
    'year': '2017'
},
{
    'name': 'Rachel B. Mizrachi',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/18838853_10212716417922524_4182070527059270365_n.jpg?oh=e82cd4e29779df48847580889c6c4fc7&oe=5A3EF848',
    'year': '2017'
},
{
    'name': 'Matan Eliashar',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-1/c0.448.1152.1152/14468697_10210136507184722_3126675715894767659_o.jpg?oh=ecc0b2d2b897b43caedb0a8e3f869a33&oe=5A8852D6',
    'year': '2017'
},
{
    'name': 'Liam Web',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/18119432_10210459998309391_6378232879186179490_n.jpg?oh=6f84a562c0555499e524afbaaacf178a&oe=5A3ADCD2',
    'year': '2017'
},
{
    'name': 'Aviv Atia',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/20525568_10155646701032372_158149002744515849_n.jpg?oh=b8dfaea382d0ea12bdf12c14ee32fc96&oe=5A3E09F1',
    'year': '2017'
},
{
    'name': 'Bar Sossover',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/10001107_10152271805858188_1495783212_o.jpg?oh=5ba8ba957fdbd434e9a75a62714004f0&oe=5A8878DA',
    'year': '2017'
},
{
    'name': 'Ohad Barazani',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/1959591_10152813893103759_5608823722000715003_n.jpg?oh=197b92d53ae94e7a69397708f8c0db56&oe=5A86DC9E',
    'year': '2017'
},
{
    'name': 'Ariel Morhovsky',
    'subtitle': '',
    'imgsrc': 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/20622032_10155020451279217_2922340145937702917_n.jpg?oh=74f333c4c8028794fbcfe476b3aba1a8&oe=5A6D370A',
    'year': '2017'
},
]

