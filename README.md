## Book Lister App

### Projede Yapılmak İstenen
register formu ile kullanıcıyı localstorage'a kayıt etmek
login formu ile kayıtlı kullanıcıyı ana sayfaya yönlendirmek
navbar compenent
ana sayfadan kitaplar sayfasına navbar üzerinden veya ana sayfa içindeki card üzerinden erişmek
kitaplar sayfasında localstorage listesine yeni kitap eklemek, var olan kitabı değiştirmek ve silmek

---------------------------------

### Teknik
- register sayfasına üzerindeki form'dan username, password ve confirmPassword bilgilerini useRef hook'unu kullanarak localstorage'a kayıt ettim ve ana sayfaya yönlendirdim.
- ana sayfada kullanıcı için hoşgeldin card'ı ve navbar hazırladım. buradan react-router-dom ile sayfalar arasında gezinti yapılabiliyor. hoşgeldin card'ı üzerinde bulunan delete account butonu ile localstorage üzerinden kullanıcı silinebiliyor.
- navbar üzerinden logout edilirse kullanıcı silinmiyor login sayfasına yönlendiriliyor.
- uygulama üzerindeki bütün formlarda basit validatelar var.
- books sayfasına gidildiğinde kitap ekleme formu geliyor. bu form üzerinden hem kitap ekleyebiliyor hem de var olan bir kitabı güncelleyebiliyoruz.
- eklenen kitaplar liste şeklinde localstorage üzerinden map edilerek getiriliyor. burada useState hooklarını kullanarak kitaplara yapılacak işlemleri daha rahat kontrol ediyoruz.
- liste elemanı üzerinde id, title, author, edit ve delete sergileniyor.
- işlem yapılan kitaplar localstorage'da olduğu için delete butonuna veya localstorage üzerinden manuel silinmedikçe kitaplar sayfa yenilendiğinde de listede duruyor.

--------------------------------

Öğrendikçe daha productive projeler yapacağıma eminim. Ahmet Çığır
