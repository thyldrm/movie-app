import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {

    state = {
        movies : [
            {
                "id":1,
                "name":"The Godfather(Baba)",
                "rating":9.2,
                "overview":"Don Corleone'nin kızı Connie'nin düğününde, ailenin en küçük oğlu ve bir savaş gazisi olan Michael babasıyla barışır. Bir suikast girişimi, Don'u artık işleri yönetemeyecek duruma düşürünce, ailenin başına Michael ve ağabeyi Sonny geçerler. Danışmanları Tom Hagen'in de yardımlarıyla diğer ailelere savaş açan Corleone ailesi, eski moda yöntemleri de değiştirmeye başlar.Mario Puzo'nun çok satan kitabından Puzo ve yönetmen Francis Ford Coppola tarafından sinemaya uyarlanan eser, 40'lar ve 50'lerin Amerika'sında, bir İtalyan mafya ailesinin destansı öyküsünü konu alıyor.",
                "imageURL":"https://www.themoviedb.org/t/p/original/gk1IvgCYg6v5H5cps21ILSOrYER.jpg"
            },
            {
                "id":2,
                "name":"The Prestige(Prestij)",
                "rating":8.5,
                "overview":"19. yy sonlarında Londra’da Robert Angier, sevgili eşi Julia McCullough ve Alfred Borden hem arkadaştırlar hem de bir sihirbazın asistanlarıdırlar. Bir gösteri esnasında Julia ölünce Robert, onun ölümünden Alfred’i suçlar ve birbirlerine düşman olurlar. Zaman içinde ikisi de hem ünlü olurlar hem de rakip sihirbazlara dönüşerek birbirlerinin sahne üstünde performansını sabote etmeye kalkışırlar. Alfred başarılı bir hile yapınca Robert, rakibinin sırrını çözmek konusunu takıntı halinde getirir ve trajik olaylar birbirini kovalar.",
                "imageURL":"https://www.themoviedb.org/t/p/original/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg"
            },
            {
                "id":3,
                "name":"Mar Adentro(İçimdeki Deniz)",
                "rating":"8.0",
                "overview":"Ramon Sampedro’nun yaşamı, 30 yıldır bir yatakta geçmektedir. Gençliğinde geçirdiği bir kazadan sonra hayatla tek ilişkisi deniz manzaralı penceresidir. Hayatına iki kadın girer: avukat Julia ve köylü kızı Rosa. Bu iki kadından biri, boynundan aşağısı felçli adama hayatın anlamını tattırır ve onun kurtuluşunu sağlar. Alejandro Amenabar’ın bu çalışması Venedik’te ikinciliği, başrol oyuncusu Javier Bardem’e de En İyi Erkek Oyuncu ödülünü aldı.",
                "imageURL":"https://www.themoviedb.org/t/p/original/tQkEMFZxv03Ik6gxIZ6LIU9imR2.jpg"
            },
            {
                "id":4,
                "name":"A Beautiful Mind(Akıl Oyunları)",
                "rating":8.2,
                "overview":"Film, önemli başarılarından uzun yıllar sonra Nobel Ödülü'ne layık görülen ünlü matematikçi John Nash'in gerçek hayat hikayesine odaklanıyor. John Forbes Nash kazandığı bir bursla Princeton Üniversitesi'nde öğrenim görmeye başlar. Bu süreçte parlak zekasını her daim hissettiren ancak çevresindekilerle uyum sorunu yaşayan dahi Nash, inanılmaz bir teoriyi ortaya sürüp kanıtlama aşamasına kadar gelir. Böylece matematik çevrelerince ününü yayan dahi adam zamanla şizofreni belirtileriyle mücadele etmeye başlar. Nash artık kendi kurgusal gerçekliklerinden oluşturduğu dünyasıyla asıl gerçekleri ayırt edemeyecek bir aşamaya gelir.",
                "imageURL":"https://www.themoviedb.org/t/p/original/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg"
            },
            {
                "id":5,
                "name":"Schindler's List(Schindler'in Listesi)",
                "rating":8.9,
                "overview":"Gerçek bir hayat hikayesinden uyarlanan film, Oskar Schindler adlı bir Alman işadamının 2. Dünya Savaşı sırasında Polonya'da kurduğu fabrikada Yahudi işçileri çalıştırmaya başlaması ve bu sayede 1100 Yahudi'nin hayatını kurtarmasını konu alıyor. Steven Spielberg'in en önemli yapıtları arasında sayılan ve ünlü yönetmene Oscar kazandıran film, 1994 yılında 12 dalda Oscar'a aday olmuş ve 7 dalda kazanmıştı. Filmin kazandığı Oscar'lar : En İyi Film, Yönetim, Kurgu, Sanat Yönetimi, Görüntü, Özgün Müzik ve Senaryo Uyarlaması.",
                "imageURL":"https://www.themoviedb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
            },
            {
                "id":6,
                "name":"Atonement(Kefaret)",
                "rating":7.8,
                "overview":"1935 yazının en sıcak günleri... On üç yaşındaki Briony Tallis, ablası Cecilia ve hizmetçilerinin oğlu Robbie'nin gizli bir şekilde flörtleşmelerine tanık olur. Çocuk aklı ile gördüklerini yanlış yorumlaması üzerine yıllarca sürecek büyük bir trajedenin yaşanmasına neden olacaktır. O andan itibaren bir daha hiç düzelmeyecek kadar trajik bir şekilde kaderleri birbirlerine bağlanan bu üç insan da, hak etmedikleri bir kefaretin farklı şekillerde kurbanı olacaklardır.",
                "imageURL":"https://www.themoviedb.org/t/p/original/bTwkpeOMChZtxDUPtbaQg1AbE5B.jpg"
            },
            {
                "id":7,
                "name":"Before Sunrise(Gün Doğmadan)",
                "rating":8.1,
                "overview":"Fransız yüksek lisans öğrencisi Celine (Julie Delpy) ile Amerikalı Jesse (Ethan Hawke), Budapeşte - Viyana treninde bir çiftin kavgası ile tesadüfen tanışırlar. Jesse, Celine'e, ertesi gün uçağa bineceğini ancak parası olmadığından sabaha kadar Viyana caddelerinde dolaşacağını söyler ve Celine'in kendisine eşlik etmesini ister. Viyana'da trenden inerler ve 14 saat boyunca hayatlarını derinden etkileyecek bir beraberliğe adım atarlar.",
                "imageURL":"https://www.themoviedb.org/t/p/original/6KWnXYoV1htDT3TGYdFWucfTt6t.jpg"
            },
            {
                "id":8,
                "name":"GoodFellas (Sıkı Dostlar)",
                "rating":8.7,
                "overview":"Gerçek bir hayat hikayesinden uyarlanan filmde Henry Hill adında bir gangster, Jimmy Conway ve Tommy De Vito adlı iki arkadaşıyla birlikte bir soyguna kalkışır. Gözleri daha yukarda olan iki arkadaşı soyguna katılan diğerlerini öldürür ve mafya içinde yükselmeye başlarlar. Bu durum Henry'i olumsuz etkilemiştir ve bu konuda birşeyler yapması gerekmektedir. Büyük usta Martin Scorsese'nin başyapıtlarından biri olan Goodfellas, 1991 yılında 6 dalda Oscar'a aday gösterilmiş, en iyi yardımcı erkek oyuncu dalında Joe Pesci'ye ödül kazandırmıştı.",
                "imageURL":"https://www.themoviedb.org/t/p/original/6QMSLvU5ziIL2T6VrkaKzN2YkxK.jpg"
            },
            {
                "id":9,
                "name":"Pride & Prejudice(Aşk ve Gurur)",
                "rating":7.8,
                "overview":"18.yüzyıl sonlarında, sınıf bilincinin hakim olduğu İngiltere'de beş kız kardeş olan Bennet'lar - Elizabeth veya Lizzie, Jane, Lydia, Mary ve Kitty, annelerinin iyi bir koca bulup geleceklerini güvence altına alma hayalleriyle büyütülmüşlerdir. Fakat, neşeli ve zeki bir mizaca sahip olan Elizabeth, kendisine düşkün olan babasının da desteğiyle hayatını daha farklı ve dolu dolu yaşamak için çabalamaktadır.",
                "imageURL":"https://www.themoviedb.org/t/p/original/8rps0oYelhGzn5a6VpYzndf5hQZ.jpg"
            }
        ]
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar/>
                    </div>
                </div>
                <MovieList/>
            </div>
        )
    }
}

export default App;