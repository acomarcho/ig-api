# ig-api
An attempt to make an API to fetch Instagram data.

This project uses `instagram-private-api`.

# How to use
1. Make a .env file by editing the provided .env.example file with your Instagram username and password.
2. Install the dependencies, `npm i`.
3. Run the server with `npm start`.
4. You can send HTTP requests to that server!

# Available endpoints and example
## Get user data
`GET {{hostname}}/ig/user/:username`

### Example for get user data
`GET {{hostname}}/ig/user/zayn`
```
{
  "message": "Successfully fetched zayn's data",
  "data": {
    "username": "zayn",
    "full_name": "Zayn Malik",
    "follower_count": 49486337,
    "following_count": 18,
    "profile_pic_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/119949251_1555425461304551_8942171633550168648_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rcRjODFOl00AX-_3bOp&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfCD0o7-AhvF9eN3yl3IOOF-4TIV7T_8Z9Dg6-LuFyl-oQ&oe=644EC0C2&_nc_sid=a9513d"
  }
}
```

## Get user's feeds
`GET {{hostname}}/ig/feeds/:username`

### Example for get user's feeds
`GET {{hostname}}/ig/feeds/acomarcho`
```
{
  "message": "Successfully fetched acomarcho's feeds",
  "data": [
    {
      "code": "CQTQz9Oj39W",
      "comment_count": 3,
      "like_count": 314,
      "caption": "[SPARTA HMIF ITB 2020]\n\nPerkenalkan, aku Marcho dari Teknik Informatika, siap untuk mengikuti rangkaian acara SPARTA\nHMIF ITB.\n\nSPARTA merupakan kaderisasi tahap awal pada rangkaian masa orientasi anggota baru\nHimpunan Mahasiswa Informatika ITB. SPARTA bertujuan untuk memberikan pengenalan dan\npembekalan yang esensial terkait himpunan dan berhimpun serta pemenuhan profil-profil\nkeanggotaan pada masa orientasi.\n\nDengan mengikuti SPARTA, aku berharap bisa mendapat pengetahuan yang bermanfaat mengenai Himpunan Mahasiswa Informatika ITB sebagai bekal menempuh kuliah di ITB.\n\nWe win this battle, we win this war. Let's do it! -piniks valoran\n\n#SPARTAHMIFITB2020\n#KontribusiBerlandaskanEmpati",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/203207676_5619753338095733_8286413927718020619_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=4hfdYOoUM3AAX_wjAET&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjU5OTQ5NTM0OTEwMjkzNTg5NA%3D%3D.2-ccb7-5&oh=00_AfCjqRlzUCz7aRWUG5advdhuBLjliVJducPSiPutdh8DgA&oe=644DC44D&_nc_sid=6136e7"
    },
    {
      "code": "CFrtJQ8jR_u",
      "comment_count": 4,
      "like_count": 262,
      "caption": "[MENDEFINISIKAN PERAN]\n\nSalah satu hal yang wajib dilakukan oleh setiap orang, khususnya seorang mahasiswa, adalah mendefinisikan perannya. Siapa aku? Apa kelebihan dan kekuranganku? Apa yang menjadi rencana masa depanku? Apa yang saya bisa lakukan untuk diri saya sendiri dan untuk orang lain? Jawaban dari pertanyaan-pertanyaan tersebut akan mendefinisikan peranmu bagi dunia ini.\n\nIni adalah definisi peran versiku!\n\n#StoryOfMyLife\n#MendefinisikanPeran\n#OSKMITB2020\n#TerangKembali",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/120202601_173280054347800_675129737149844110_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=VZFlP8ZeH8EAX9wFFWH&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjQwODIxNjk2ODAzMDk5NDg4Mg%3D%3D.2-ccb7-5&oh=00_AfDDUgIvXsE9XoiWU3vjXf5onZ5H98KQhIpddM64id7JlQ&oe=644EBDCD&_nc_sid=6136e7"
    },
    {
      "code": "CFZqcnDjMv5",
      "comment_count": 7,
      "like_count": 209,
      "caption": "[ADA APA DENGAN INDONESIA DI TAHUN 2045?]\n\nDi tahun 2045, Indonesia akan berumur 100 tahun. Di tahun ini, diprediksi angka penduduk usia produktif mencapai 70%. Hal ini dapat menciptakan bonus demografi atau kutukan demografi.\n\nAgar bonus demografi dapat dinikmati dengan baik, maka para penerus bangsa harus mempersiapkan diri dari sekarang! Salah satu pilar dari pembangunan Indonesia 2045 adalah Pembangunan Manusia dan Penguasaan Iptek. Yuk, simak apa saja yang menjadi tantangan dan solusi yang berhubungan dengan pilar ini!\n\n#MenujuIndonesiaEmas2045\n#OSKMITB2020\n#ITBxByU",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/119745503_1210907669296052_6267942597281078469_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=rkrHCEwdeM8AX80lc2E&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjQwMzEzODU1NDA1NjAzNDAyNg%3D%3D.2-ccb7-5&oh=00_AfDEwubXyHlBah7-XJ4GhIvScyGqHb878Jt0TkI1cyemIw&oe=644D5F42&_nc_sid=6136e7"
    },
    {
      "code": "CFXFAZ4jUfu",
      "comment_count": 22,
      "like_count": 338,
      "caption": "// #ThisIsSTEIEmpire⁣\n⁣\n# include <iostream>⁣\n# include <string>⁣\nusing namespace std;⁣\n⁣\nint main(){⁣\n string a,b,c ;⁣\n a = \"Marchotridyo\" ;\n b = \"Sekolah Teknik Elektro dan Informatika\" ;\n c = \"Institut Teknologi Bandung\" ;\n cout << \" Hello, i'm \" << a \n << \". I'm from \" << b <<\" \" \n << c <<\" endl ;⁣\n return 0 ; ⁣\n}⁣\n⁣\n\nHello, I'm Marchotridyo. \nI'm from Sekolah Teknik Elektro dan Informatika\nInstitut Teknologi Bandung\n⁣\nI'm ready to be a part of 2020's STEI Empire, together we strive to excel and succeed in our ITB journey.⁣\n⁣\nGodspeed, fellows!\n⁣\n⁣\n⁣\n⁣\n⁣\n⁣\n#STEI20 #ITB20 #STEIathome",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/119768280_804500683627911_6474882425282276102_n.jpg?stp=dst-jpg_e35_s360x360&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=eoGTAmyeGVYAX9lmBrx&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjQwMjQxMDk0NDI1MDMzMzE2Ng%3D%3D.2-ccb7-5&oh=00_AfDg2Y0JXuCmb9FaK9wiqugwE8Gn4RsVPb8yRqQUW0Gcdg&oe=644DF120&_nc_sid=6136e7"
    },
    {
      "code": "CFW8g4kDu0J",
      "comment_count": 11,
      "like_count": 226,
      "caption": "[TANTANGAN MASA DEPAN DAN CARA MENGHADAPINYA]\n\nNIM/Nama: 16520345/Marchotridyo\n\nClimate change (perubahan iklim)  merupakan salah satu dari masalah global yang terus berkembang dan terus kita lawan saat ini. Dari perubahan cuaca tak terprediksi yang mengganggu supply makanan sampai dengan naiknya permukaan air yang meningkatkan potensi banjir, konsekuensi yang ditimbulkan mencapai skala global dan akan memengaruhi orang banyak.\n\nTanpa aksi, masa depan kita akan lebih riskan dan sulit untuk dihidupi. Oleh karena itu, yuk, simak penjelasan sangat singkat mengenai Climate Change ini!\n\n#TantanganMasaDepan\n#DuniaVUCA\n#OSKMITB2020\n#TerangKembali",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/119944931_160976838968701_4673722668097257105_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=Ftf73K5q2ywAX9Ak2_P&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjQwMjM3MzU4OTQ5MzgxODQyMw%3D%3D.2-ccb7-5&oh=00_AfAlwRC_X5Fa8oxmlU_mDo4Bv6idmBzF6o-vsgxHd8oFMA&oe=644E0BEB&_nc_sid=6136e7"
    },
    {
      "code": "B-wNS8cpWOo",
      "comment_count": 17,
      "like_count": 294,
      "caption": "Hallo #CalonMahasiswalndonesia! Perkenalkan saya Marcho, calon mahasiswa STEI ITB. Pandemik COVID-19 yang menyerang Indonesia menjadi tugas dan tanggung jawab kita bersama. Maka dari itu, saya melakukan gerakan cuci tangan dengan sabun, mempelajari etika bersin dan batuk yang benar, serta social distancing selama 14 hari sebagai kontribusi nyata dalam melawan penyebaran Virus COVID-19. Ini kontribusiku, sekarang giliranmu! #KontribusiNyataCalonMahasiswa #CalonMahasiswalndonesiaMelawanCorona\n@ltmptofficial\n@kemdikbud.ri\n@ditjen.dikti\n #LTMPT2020 #DariSTEIUntukNegeri #STEI20 #STEIathome",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/92753891_572606413353861_2409845988209371755_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=5LI9XSBvVk4AX8QFF9z&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjI4MzM4MzQ4NDA0NzYxNzg3Mw%3D%3D.2-ccb7-5&oh=00_AfBluDDoUqSiE4x9CVB3cO1fMFLiK-e_tBuPA1OsHighbA&oe=644DD11F&_nc_sid=6136e7"
    },
    {
      "code": "B3R16FsHXc0",
      "comment_count": 1,
      "like_count": 67,
      "caption": "untuk aku dan kamu,\nyang sedang bersedih hati.\n--a visual poetry by XII MIPA 3\n8 menit, tapi worth all your time, kok!\n\n#SMANEGERI3BANDUNGPEDULINKRI",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/70870201_158579571890263_227702249233083537_n.jpg?stp=dst-jpg_e35_p360x360&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=3dsb9ND5VAsAX-9tRfV&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjE0ODczNTU4NTUzNjAxNDEzMg%3D%3D.2-ccb7-5&oh=00_AfBdWLlhFRuH4Jh1mbemyQr3MU32FfqMSVCJg0PHpHRqIw&oe=644DB06E&_nc_sid=6136e7"
    },
    {
      "code": "ByDKf6SAeaC",
      "comment_count": 8,
      "like_count": 138,
      "caption": "kau datang tatkala\nsinar senjaku telah redup;\n•\ndan pamit ketika\npurnamaku penuh seutuhnya.",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/60788116_486905348713071_6020628119893663521_n.jpg?stp=dst-jpg_e35_s360x360&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=OjAbQGi46KEAX959pBy&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjA1NDUzMjAyODM1OTEwODIyNg%3D%3D.2-ccb7-5&oh=00_AfCeRWBqAwFf80Eo0A5l63ekPR-f8imvhGu5ovf0DyswAQ&oe=644DF66C&_nc_sid=6136e7"
    },
    {
      "code": "Br6n4aJHZpd",
      "comment_count": 11,
      "like_count": 181,
      "caption": "-i sometimes wish i'd never been born at all.\n•\nthe piano slide at the end tho xD\n•\nbaru agak belajar gitar listrik 2 hari and this one's fully played by ear (gabisa baca tab) jadi yaa gitu doang ehehe\n•\n#music #cover #queen #bohemian #rhapsody #guitar #vocal #piano #drum",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/46770818_2439098016104318_4618390368891682078_n.jpg?stp=dst-jpg_e35_s360x360&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=y5jaEn7Km6sAX9XgMJY&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTk0NDA0MTU4OTMzODY0MzAzNw%3D%3D.2-ccb7-5&oh=00_AfBLu0n4h-ME7Ai70Dy449H0Ox1POF3RdKbSrbjX4NLFKg&oe=644DE788&_nc_sid=6136e7"
    },
    {
      "code": "BpeFSrPnIdt",
      "comment_count": 5,
      "like_count": 148,
      "caption": "you'll be alright, no one can hurt you now.\n-\na self-made guitar arrangement made in 10 mins out of boredom :p\n-\n#guitar #fingerstyle #cover #music #safeandsound",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/43638145_2188078721256735_2032334966388153275_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=k-_AMUsH8VEAX-A19tz&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBi0NvUd7VTzuzgXO__WaWbvGk0hM1SksT9Hus6snbYog&oe=644A88A3&_nc_sid=6136e7"
    },
    {
      "code": "Bo3blRWBuKN",
      "comment_count": 1,
      "like_count": 118,
      "caption": "would it be a sin, if I can't help falling in love with you?\n•\nliterally whispering to the microphone :p",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/42419825_549900885453106_8239786885446643693_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=eFp3fJk21sMAX85ZF2Z&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBgC02gf9toaLdBvoCEAdtfy2jyvKsfB-blURU2eGFx6w&oe=644A8F8C&_nc_sid=6136e7"
    },
    {
      "code": "BnOhCOLhYPU",
      "comment_count": 4,
      "like_count": 199,
      "caption": "-it was a night;\na night full of memories,\na night full of strangers,\na night full of unfulfilled wishes.",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/39942090_296044157647617_1645150913079279616_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=NW_Oa2BmMEwAX-H-Zw5&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTg1OTU2MDk0MTgyMjUyOTk0Mw%3D%3D.2-ccb7-5&oh=00_AfB_iw8qZsjzreDVPJURRfoR0_X0PnugHS0z6v6xw9HysA&oe=644DC15C&_nc_sid=6136e7"
    },
    {
      "code": "Bm7aFIgBYt5",
      "comment_count": 1,
      "like_count": 91,
      "caption": "come up to meet you,\ntell you I'm sorry,\nyou don't know how lovely you are.\n\n@coldplay #thescientist",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/39092990_251779682338410_7023391811049619456_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=GUzZfRZzBTYAX9YN63y&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfB_gwtGI635uRII8F7CLuba5DPA6DoW7f-YXl1tZtbZ_Q&oe=644A7E8A&_nc_sid=6136e7"
    },
    {
      "code": "BlIxFRBhbJ2",
      "comment_count": 0,
      "like_count": 144,
      "caption": "first attempt with loops ehehe\n•\nFRIENDS - Marshmello & Anne-Marie\n•\nLMMS w/ stock instruments\n•\n#music #cover #loop #marshmello #remix #friends #annemarie #lmms #maudio",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/36492738_839637869572339_2135200733023174656_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=qKU5wHyCArwAX-pApZ5&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDz-mKZXgrJcbvgfcnuB7m-KDnn9MR1kBumkSucBlu2sw&oe=644A84D0&_nc_sid=6136e7"
    },
    {
      "code": "Bk0SNWRBex7",
      "comment_count": 3,
      "like_count": 119,
      "caption": "Tropical Sunset: my first original song! (warning: might be a bit louder than usual)\n•\n(i did this as a challenge: create a chainsmokers style song within 2 hours)\n•\nprogram(s) used: LMSS (stock VSTs) and Sony Vegas w/ BCC plugin\n•\n#music\n#edm #remix #lmss #song #melody #chainsmokers #piano",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/35574303_190071615004471_2721286060360335360_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=fDadgPw_DvMAX_g7Gbg&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBg33aRJESTRTTTjjtsiqElicfHBX6JUz_sc7j3uF9avQ&oe=644A84CC&_nc_sid=6136e7"
    },
    {
      "code": "BkcA64XBwFz",
      "comment_count": 18,
      "like_count": 160,
      "caption": "what even is this\n•\ngo send this to someone w/o any context :)\n•\n#dog #remix #ilikemebetter #lauv #music",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/34838669_516485862100847_3437450266167738368_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=CjzId5IzVdkAX-SbP6C&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfCxmVKwZGCoJ9YPQMtBhzKYnf7m1cPSKKUtbZDpGReBXQ&oe=644A80C3&_nc_sid=6136e7"
    },
    {
      "code": "BkXDAVDhAGH",
      "comment_count": 3,
      "like_count": 129,
      "caption": "hitting that crisp g#4 which is a half step down of my max vocal range\n•\n-someone told me I should take,\ncaution when it comes to love,\nI did.\n•\n#music #impossible #jamesarthur #cover #guitar #vocal #acoustic #indomusikgram",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/35574607_1846114355410684_3894702921270427648_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=gS8OPmQ9fF4AX9ccIIt&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBPa0rpWlQNYA5Vp6q93oIQFpNnEWy7OFC-knIPf_yubA&oe=644A808F&_nc_sid=6136e7"
    },
    {
      "code": "Bi05Y5IhuFs",
      "comment_count": 7,
      "like_count": 119,
      "caption": "The Story Never Ends - @lauvsongs\n-\nUncut version: soundcloud.com/marcho-tridyo\n-\nJust experimenting playing the piano while singing ehehe bcs i suck at both\n-\nJust ignore these :')\n@indomusikgram @vandorbles_music #indomusikgram #vandorblesmusic #music #piano #cover #lauv #thestoryneverends #vocal",
      "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/31286090_179332136222758_4574616610962145280_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=ciK38GpwEO4AX88gf3m&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBiqNqBmvtuki37OvX1RfglU8enAjrRoAV6R3HAqjc0bQ&oe=644B06A2&_nc_sid=6136e7"
    }
  ]
}
```

## Get user's data and feeds
`GET {{hostname}}/ig/user-and-feeds/:username`

### Example for get user's data and feeds
`GET {{hostname}}/ig/user-and-feeds/acomarcho`
```
{
  "message": "Successfully fetched acomarcho's feeds",
  "data": {
    "user": {
      "username": "acomarcho",
      "full_name": "Marchotridyo",
      "follower_count": 1012,
      "following_count": 836,
      "profile_pic_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/14374211_1781405778768106_1767760877781516288_a.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=HMixPDDeWI4AX_yozmg&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfDPnePNiekEzgfigyDhLe1BeL21WXpSxhvdI-kkvk6y2g&oe=644D847B&_nc_sid=a9513d"
    },
    "posts": [
      {
        "code": "CQTQz9Oj39W",
        "comment_count": 3,
        "like_count": 314,
        "caption": "[SPARTA HMIF ITB 2020]\n\nPerkenalkan, aku Marcho dari Teknik Informatika, siap untuk mengikuti rangkaian acara SPARTA\nHMIF ITB.\n\nSPARTA merupakan kaderisasi tahap awal pada rangkaian masa orientasi anggota baru\nHimpunan Mahasiswa Informatika ITB. SPARTA bertujuan untuk memberikan pengenalan dan\npembekalan yang esensial terkait himpunan dan berhimpun serta pemenuhan profil-profil\nkeanggotaan pada masa orientasi.\n\nDengan mengikuti SPARTA, aku berharap bisa mendapat pengetahuan yang bermanfaat mengenai Himpunan Mahasiswa Informatika ITB sebagai bekal menempuh kuliah di ITB.\n\nWe win this battle, we win this war. Let's do it! -piniks valoran\n\n#SPARTAHMIFITB2020\n#KontribusiBerlandaskanEmpati",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/203207676_5619753338095733_8286413927718020619_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=4hfdYOoUM3AAX_wjAET&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjU5OTQ5NTM0OTEwMjkzNTg5NA%3D%3D.2-ccb7-5&oh=00_AfCjqRlzUCz7aRWUG5advdhuBLjliVJducPSiPutdh8DgA&oe=644DC44D&_nc_sid=6136e7"
      },
      {
        "code": "CFrtJQ8jR_u",
        "comment_count": 4,
        "like_count": 262,
        "caption": "[MENDEFINISIKAN PERAN]\n\nSalah satu hal yang wajib dilakukan oleh setiap orang, khususnya seorang mahasiswa, adalah mendefinisikan perannya. Siapa aku? Apa kelebihan dan kekuranganku? Apa yang menjadi rencana masa depanku? Apa yang saya bisa lakukan untuk diri saya sendiri dan untuk orang lain? Jawaban dari pertanyaan-pertanyaan tersebut akan mendefinisikan peranmu bagi dunia ini.\n\nIni adalah definisi peran versiku!\n\n#StoryOfMyLife\n#MendefinisikanPeran\n#OSKMITB2020\n#TerangKembali",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/120202601_173280054347800_675129737149844110_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=VZFlP8ZeH8EAX9wFFWH&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjQwODIxNjk2ODAzMDk5NDg4Mg%3D%3D.2-ccb7-5&oh=00_AfDDUgIvXsE9XoiWU3vjXf5onZ5H98KQhIpddM64id7JlQ&oe=644EBDCD&_nc_sid=6136e7"
      },
      {
        "code": "CFZqcnDjMv5",
        "comment_count": 7,
        "like_count": 209,
        "caption": "[ADA APA DENGAN INDONESIA DI TAHUN 2045?]\n\nDi tahun 2045, Indonesia akan berumur 100 tahun. Di tahun ini, diprediksi angka penduduk usia produktif mencapai 70%. Hal ini dapat menciptakan bonus demografi atau kutukan demografi.\n\nAgar bonus demografi dapat dinikmati dengan baik, maka para penerus bangsa harus mempersiapkan diri dari sekarang! Salah satu pilar dari pembangunan Indonesia 2045 adalah Pembangunan Manusia dan Penguasaan Iptek. Yuk, simak apa saja yang menjadi tantangan dan solusi yang berhubungan dengan pilar ini!\n\n#MenujuIndonesiaEmas2045\n#OSKMITB2020\n#ITBxByU",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/119745503_1210907669296052_6267942597281078469_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=rkrHCEwdeM8AX80lc2E&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjQwMzEzODU1NDA1NjAzNDAyNg%3D%3D.2-ccb7-5&oh=00_AfDEwubXyHlBah7-XJ4GhIvScyGqHb878Jt0TkI1cyemIw&oe=644D5F42&_nc_sid=6136e7"
      },
      {
        "code": "CFXFAZ4jUfu",
        "comment_count": 22,
        "like_count": 338,
        "caption": "// #ThisIsSTEIEmpire⁣\n⁣\n# include <iostream>⁣\n# include <string>⁣\nusing namespace std;⁣\n⁣\nint main(){⁣\n string a,b,c ;⁣\n a = \"Marchotridyo\" ;\n b = \"Sekolah Teknik Elektro dan Informatika\" ;\n c = \"Institut Teknologi Bandung\" ;\n cout << \" Hello, i'm \" << a \n << \". I'm from \" << b <<\" \" \n << c <<\" endl ;⁣\n return 0 ; ⁣\n}⁣\n⁣\n\nHello, I'm Marchotridyo. \nI'm from Sekolah Teknik Elektro dan Informatika\nInstitut Teknologi Bandung\n⁣\nI'm ready to be a part of 2020's STEI Empire, together we strive to excel and succeed in our ITB journey.⁣\n⁣\nGodspeed, fellows!\n⁣\n⁣\n⁣\n⁣\n⁣\n⁣\n#STEI20 #ITB20 #STEIathome",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/119768280_804500683627911_6474882425282276102_n.jpg?stp=dst-jpg_e35_s360x360&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=eoGTAmyeGVYAX9lmBrx&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjQwMjQxMDk0NDI1MDMzMzE2Ng%3D%3D.2-ccb7-5&oh=00_AfDg2Y0JXuCmb9FaK9wiqugwE8Gn4RsVPb8yRqQUW0Gcdg&oe=644DF120&_nc_sid=6136e7"
      },
      {
        "code": "CFW8g4kDu0J",
        "comment_count": 11,
        "like_count": 226,
        "caption": "[TANTANGAN MASA DEPAN DAN CARA MENGHADAPINYA]\n\nNIM/Nama: 16520345/Marchotridyo\n\nClimate change (perubahan iklim)  merupakan salah satu dari masalah global yang terus berkembang dan terus kita lawan saat ini. Dari perubahan cuaca tak terprediksi yang mengganggu supply makanan sampai dengan naiknya permukaan air yang meningkatkan potensi banjir, konsekuensi yang ditimbulkan mencapai skala global dan akan memengaruhi orang banyak.\n\nTanpa aksi, masa depan kita akan lebih riskan dan sulit untuk dihidupi. Oleh karena itu, yuk, simak penjelasan sangat singkat mengenai Climate Change ini!\n\n#TantanganMasaDepan\n#DuniaVUCA\n#OSKMITB2020\n#TerangKembali",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/119944931_160976838968701_4673722668097257105_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=Ftf73K5q2ywAX9Ak2_P&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjQwMjM3MzU4OTQ5MzgxODQyMw%3D%3D.2-ccb7-5&oh=00_AfAlwRC_X5Fa8oxmlU_mDo4Bv6idmBzF6o-vsgxHd8oFMA&oe=644E0BEB&_nc_sid=6136e7"
      },
      {
        "code": "B-wNS8cpWOo",
        "comment_count": 17,
        "like_count": 294,
        "caption": "Hallo #CalonMahasiswalndonesia! Perkenalkan saya Marcho, calon mahasiswa STEI ITB. Pandemik COVID-19 yang menyerang Indonesia menjadi tugas dan tanggung jawab kita bersama. Maka dari itu, saya melakukan gerakan cuci tangan dengan sabun, mempelajari etika bersin dan batuk yang benar, serta social distancing selama 14 hari sebagai kontribusi nyata dalam melawan penyebaran Virus COVID-19. Ini kontribusiku, sekarang giliranmu! #KontribusiNyataCalonMahasiswa #CalonMahasiswalndonesiaMelawanCorona\n@ltmptofficial\n@kemdikbud.ri\n@ditjen.dikti\n #LTMPT2020 #DariSTEIUntukNegeri #STEI20 #STEIathome",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/92753891_572606413353861_2409845988209371755_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=5LI9XSBvVk4AX8QFF9z&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjI4MzM4MzQ4NDA0NzYxNzg3Mw%3D%3D.2-ccb7-5&oh=00_AfBluDDoUqSiE4x9CVB3cO1fMFLiK-e_tBuPA1OsHighbA&oe=644DD11F&_nc_sid=6136e7"
      },
      {
        "code": "B3R16FsHXc0",
        "comment_count": 1,
        "like_count": 67,
        "caption": "untuk aku dan kamu,\nyang sedang bersedih hati.\n--a visual poetry by XII MIPA 3\n8 menit, tapi worth all your time, kok!\n\n#SMANEGERI3BANDUNGPEDULINKRI",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/70870201_158579571890263_227702249233083537_n.jpg?stp=dst-jpg_e35_p360x360&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=3dsb9ND5VAsAX-9tRfV&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjE0ODczNTU4NTUzNjAxNDEzMg%3D%3D.2-ccb7-5&oh=00_AfBdWLlhFRuH4Jh1mbemyQr3MU32FfqMSVCJg0PHpHRqIw&oe=644DB06E&_nc_sid=6136e7"
      },
      {
        "code": "ByDKf6SAeaC",
        "comment_count": 8,
        "like_count": 138,
        "caption": "kau datang tatkala\nsinar senjaku telah redup;\n•\ndan pamit ketika\npurnamaku penuh seutuhnya.",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/60788116_486905348713071_6020628119893663521_n.jpg?stp=dst-jpg_e35_s360x360&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=OjAbQGi46KEAX959pBy&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjA1NDUzMjAyODM1OTEwODIyNg%3D%3D.2-ccb7-5&oh=00_AfCeRWBqAwFf80Eo0A5l63ekPR-f8imvhGu5ovf0DyswAQ&oe=644DF66C&_nc_sid=6136e7"
      },
      {
        "code": "Br6n4aJHZpd",
        "comment_count": 11,
        "like_count": 181,
        "caption": "-i sometimes wish i'd never been born at all.\n•\nthe piano slide at the end tho xD\n•\nbaru agak belajar gitar listrik 2 hari and this one's fully played by ear (gabisa baca tab) jadi yaa gitu doang ehehe\n•\n#music #cover #queen #bohemian #rhapsody #guitar #vocal #piano #drum",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/46770818_2439098016104318_4618390368891682078_n.jpg?stp=dst-jpg_e35_s360x360&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=y5jaEn7Km6sAX9XgMJY&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTk0NDA0MTU4OTMzODY0MzAzNw%3D%3D.2-ccb7-5&oh=00_AfBLu0n4h-ME7Ai70Dy449H0Ox1POF3RdKbSrbjX4NLFKg&oe=644DE788&_nc_sid=6136e7"
      },
      {
        "code": "BpeFSrPnIdt",
        "comment_count": 5,
        "like_count": 148,
        "caption": "you'll be alright, no one can hurt you now.\n-\na self-made guitar arrangement made in 10 mins out of boredom :p\n-\n#guitar #fingerstyle #cover #music #safeandsound",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/43638145_2188078721256735_2032334966388153275_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=k-_AMUsH8VEAX-A19tz&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBi0NvUd7VTzuzgXO__WaWbvGk0hM1SksT9Hus6snbYog&oe=644A88A3&_nc_sid=6136e7"
      },
      {
        "code": "Bo3blRWBuKN",
        "comment_count": 1,
        "like_count": 118,
        "caption": "would it be a sin, if I can't help falling in love with you?\n•\nliterally whispering to the microphone :p",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/42419825_549900885453106_8239786885446643693_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=eFp3fJk21sMAX85ZF2Z&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBgC02gf9toaLdBvoCEAdtfy2jyvKsfB-blURU2eGFx6w&oe=644A8F8C&_nc_sid=6136e7"
      },
      {
        "code": "BnOhCOLhYPU",
        "comment_count": 4,
        "like_count": 199,
        "caption": "-it was a night;\na night full of memories,\na night full of strangers,\na night full of unfulfilled wishes.",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/39942090_296044157647617_1645150913079279616_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=NW_Oa2BmMEwAX-H-Zw5&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTg1OTU2MDk0MTgyMjUyOTk0Mw%3D%3D.2-ccb7-5&oh=00_AfB_iw8qZsjzreDVPJURRfoR0_X0PnugHS0z6v6xw9HysA&oe=644DC15C&_nc_sid=6136e7"
      },
      {
        "code": "Bm7aFIgBYt5",
        "comment_count": 1,
        "like_count": 91,
        "caption": "come up to meet you,\ntell you I'm sorry,\nyou don't know how lovely you are.\n\n@coldplay #thescientist",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/39092990_251779682338410_7023391811049619456_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=GUzZfRZzBTYAX9YN63y&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfB_gwtGI635uRII8F7CLuba5DPA6DoW7f-YXl1tZtbZ_Q&oe=644A7E8A&_nc_sid=6136e7"
      },
      {
        "code": "BlIxFRBhbJ2",
        "comment_count": 0,
        "like_count": 144,
        "caption": "first attempt with loops ehehe\n•\nFRIENDS - Marshmello & Anne-Marie\n•\nLMMS w/ stock instruments\n•\n#music #cover #loop #marshmello #remix #friends #annemarie #lmms #maudio",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/36492738_839637869572339_2135200733023174656_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=qKU5wHyCArwAX-pApZ5&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDz-mKZXgrJcbvgfcnuB7m-KDnn9MR1kBumkSucBlu2sw&oe=644A84D0&_nc_sid=6136e7"
      },
      {
        "code": "Bk0SNWRBex7",
        "comment_count": 3,
        "like_count": 119,
        "caption": "Tropical Sunset: my first original song! (warning: might be a bit louder than usual)\n•\n(i did this as a challenge: create a chainsmokers style song within 2 hours)\n•\nprogram(s) used: LMSS (stock VSTs) and Sony Vegas w/ BCC plugin\n•\n#music\n#edm #remix #lmss #song #melody #chainsmokers #piano",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/35574303_190071615004471_2721286060360335360_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=fDadgPw_DvMAX_g7Gbg&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBg33aRJESTRTTTjjtsiqElicfHBX6JUz_sc7j3uF9avQ&oe=644A84CC&_nc_sid=6136e7"
      },
      {
        "code": "BkcA64XBwFz",
        "comment_count": 18,
        "like_count": 160,
        "caption": "what even is this\n•\ngo send this to someone w/o any context :)\n•\n#dog #remix #ilikemebetter #lauv #music",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/34838669_516485862100847_3437450266167738368_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=CjzId5IzVdkAX-SbP6C&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfCxmVKwZGCoJ9YPQMtBhzKYnf7m1cPSKKUtbZDpGReBXQ&oe=644A80C3&_nc_sid=6136e7"
      },
      {
        "code": "BkXDAVDhAGH",
        "comment_count": 3,
        "like_count": 129,
        "caption": "hitting that crisp g#4 which is a half step down of my max vocal range\n•\n-someone told me I should take,\ncaution when it comes to love,\nI did.\n•\n#music #impossible #jamesarthur #cover #guitar #vocal #acoustic #indomusikgram",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/35574607_1846114355410684_3894702921270427648_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=gS8OPmQ9fF4AX9ccIIt&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBPa0rpWlQNYA5Vp6q93oIQFpNnEWy7OFC-knIPf_yubA&oe=644A808F&_nc_sid=6136e7"
      },
      {
        "code": "Bi05Y5IhuFs",
        "comment_count": 7,
        "like_count": 119,
        "caption": "The Story Never Ends - @lauvsongs\n-\nUncut version: soundcloud.com/marcho-tridyo\n-\nJust experimenting playing the piano while singing ehehe bcs i suck at both\n-\nJust ignore these :')\n@indomusikgram @vandorbles_music #indomusikgram #vandorblesmusic #music #piano #cover #lauv #thestoryneverends #vocal",
        "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/31286090_179332136222758_4574616610962145280_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=ciK38GpwEO4AX88gf3m&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBiqNqBmvtuki37OvX1RfglU8enAjrRoAV6R3HAqjc0bQ&oe=644B06A2&_nc_sid=6136e7"
      }
    ]
  }
}
```

## Get post data by shortcode
`GET {{hostname}}/ig/post/:shortcode`

### Example for get post data by shortcode
`GET {{hostname}}/ig/post/CQTQz9Oj39W`
```
{
  "message": "Successfully fetched post data with shortcode CQTQz9Oj39W",
  "data": {
    "username": "acomarcho",
    "code": "CQTQz9Oj39W",
    "comment_count": 3,
    "like_count": 314,
    "caption": "[SPARTA HMIF ITB 2020]\n\nPerkenalkan, aku Marcho dari Teknik Informatika, siap untuk mengikuti rangkaian acara SPARTA\nHMIF ITB.\n\nSPARTA merupakan kaderisasi tahap awal pada rangkaian masa orientasi anggota baru\nHimpunan Mahasiswa Informatika ITB. SPARTA bertujuan untuk memberikan pengenalan dan\npembekalan yang esensial terkait himpunan dan berhimpun serta pemenuhan profil-profil\nkeanggotaan pada masa orientasi.\n\nDengan mengikuti SPARTA, aku berharap bisa mendapat pengetahuan yang bermanfaat mengenai Himpunan Mahasiswa Informatika ITB sebagai bekal menempuh kuliah di ITB.\n\nWe win this battle, we win this war. Let's do it! -piniks valoran\n\n#SPARTAHMIFITB2020\n#KontribusiBerlandaskanEmpati",
    "thumbnail_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/203207676_5619753338095733_8286413927718020619_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=4hfdYOoUM3AAX_wjAET&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjU5OTQ5NTM0OTEwMjkzNTg5NA%3D%3D.2-ccb7-5&oh=00_AfBl6WCffm5Be_kG3ijinbINrA9qkF6lVbigK4e3iEenTA&oe=644DC44D&_nc_sid=30a2ef"
  }
}
```
