import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://wallpaperaccess.com/full/983279.jpg' }}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/d7f7/20cc/f7806d9adfb83d62e8c541e7f27b6638?Expires=1687737600&Signature=U12WYbkGxqbfOHzav933gyijxqFSB~cTTkphdH4r-A8qpMaNPTV1uHbXq5ka9YWwEWw2vSo~jDppYagwipuLe66Dk7rNhCauwDfsiU6g-SHifnXqAKtcRujXjqcSnuL3vGZOytBVkbV5tigF2rfcpqOiXSCrfRdsql1RZi7FctI30YGVYrWCwifP3dzsspNy1521XLwOG~IJlZb8AeSj8cd13TjFYpaqXJXWYKoX7mmPgYnmna7gvVB0FnWlBzepW639QiKf602l3FPMTREmLjEv41g6ZQoQom7ze-Zo~GblvuSMn4cpdaVuyc9VlOmZN29UpaysVLtDoZS8pO2WPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={styles.logo}
          />
        </View>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <TextInput placeholder="Search" style={styles.searchInput} />
          </View>
        </View>
        <Text style={styles.deskripsi1}>Rekomendasi untuk kamu</Text>
        <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/dce8/1bb6/272aa35a45e000dd5bf697afd95e4762?Expires=1687737600&Signature=Dt-AAKkxpoASIditrORiGZEltkUtqxAtc8Ru0cTonpiLRlg9MA3U61VEHAZRw97F7senYNp6aDUmCzu5gg1kPiPTmx7INo2Hkv3W4qGQE87QS~OSIFob80czXSueJIeNuYCMrr9VICzFlw8rSV7~6dqgI~FbJqwzAW~XkXvWJZAEz7lMdOsP87cxYZlBwnSwNVbkq0-lv4CLZK2q7Yv2Fw8uJr6r64GFD1DOF94gECbgyNptf6DU2FL6uPpjh6XM4KsLT4N0x0CJtmiYIei4K5oDBjzDKtxAgru3W2dy1Ay5fUvEFnRoJsp~Esk7719qBX4L-ymTfUDR8MNuhSGf1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster6}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/af5c/d1f4/2ad8df8b4255782176ad976c01be13f4?Expires=1687737600&Signature=TWoUKs9S1YhU2FWRCYw0mAs9kO1X21d9~Io3VFpCha4Jrk2SIPR1CQIZyEqwSUOTOaSnLeXrfuvd2eOuKUbOZGMQwNTMnAW5D1t1UugW4uXOg51evRm4Zx0DiAOJhVmsU1Z8XJLIIk65HI0UiqAuC9RNWHbizZmS8Ir0Zj6rPzRqu~t2kETf9ZJQBULWwm4E0McIuM97sSGjqk-QPYLBBKAvhA7Nmnkk~HGa9N2M~AqAscYtUnZn8Uq63zBaLtYiolOEyjFgLP8k6f~EZiHiq5OvOkkf78uboe1CZx0G3FqkH-93s3E3DTghAnXZtMrRqiIa26hU1ze0THk672c12g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster7}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/5318/dab4/6c081e95b7afc7999b1d64f7422ca505?Expires=1687737600&Signature=exmMAESSWMxn4EiVEkXTQwnOX7Nvz9xF9AC0fcE1kUA34Y~rJwYyNJLYVvMxPblDaP0U1MxmKG6tpKEox1F7e6RJm0u~882~rOvZx4-p4YHg0v5yrGybNbzDZUI87-NicqElCpuOOjbgwEX1-yL37yPLONF4XH63Qtno84T2ZNhLp09ofH7Rtpfdd4a7cd3MPJLU15V6Spz18c7Uhl27iXgzJ1Ha-2EYhbZ03i83deGveQt0uJcC3twStXbSCKgj5VDeOm3HCWQAxB0mzwwFjttFTV-fOgYs79cp2eHI4uVnn4cIOyoV8qgMIdqzJM-OT6nSgsd-1JgAvNe9QQJmJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster8}
            />
          </TouchableOpacity>
          <Text style={styles.deskripsi2}>Untuk kamu yang berlangganan</Text>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/5130/eb0c/6105025c877622d36ac6bd6917024557?Expires=1687737600&Signature=jjZlGUOGUELaIzSW3vmYrdVTcR~o58Fa3wERYqjPmQIJ8e1uAHVW~5rxshR3I8XI9~WWTLs5MQVAkZtqGvk-MOzf9~brPrtygmVV4GITGFDYjSXFECKM79p-xtGIWxEnUD9KAJSXDE7H9ZUb5CflXQLHkQVT4vIS5wVN~KKdvX8OhTMcqc9qZPyPmpRpek2byrUI~WjQPD37v0vvSL2mFYcPNxBOG1U-~YXEsQYi2QCtQOvIXD7dkFGSryZQ~HxvqdqC0-RzGq3AVgiheO6AkBmXob~zurkwJqGC4pUjeImNoFvHA4iEUQPLXeudkSifonw8BmTf3e4FHPsO8UgBbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster1}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/9652/738b/358814b64a200fd8c37c9410de1ddfda?Expires=1687737600&Signature=Qh5zyAVcq7fUoYv-rDqzECZq79k25xQyqz6lekUK9uFEDdTM8x3qgJ4YRxPeGdatmmGegaNfBlWIE~SoM-9Q3iB6LRuV25JVg2-6kQ4nYttXvU0-uGlXNtkbb4JEMMgV~RaEOaSiOhorY8EWDUbOLf8LPJq6Jba9eQ2qfhAHcdvgg7XFVth6iSCP5sC1~uj8IVArMX~MHGjX6oAdZI9vjmQrCqvtTT3UgzGdDxy1xhGL2PM1RSNFRGP6EpAVU4oc9jPkUereLD2og6mRXoPvgS9tfuVtpdOVycJA23LHvigZNWTJlF48lyHKkCZEUlHsx8Bk9WhzVam9Nf9hFU7B9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster2}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/cf91/3498/9f56b6369ab3c0e3c20fe6473c9d624c?Expires=1687737600&Signature=nmFrFLt2s-IhiAr30zAPBYmT7IFS0tJRfevJuNXx7L9LKBtGOxyP7lhvk3gPH4fBf~Dpy69yUaV-cykhP6S1d~xvrTSlXeOvjRJ18vtSxYvzYmvpJlSib~KLa09Fcr366Faz~2cV2JUTplW1uZwuUoAo5hwOkC5Rvap4Bo8mUPPIo0zaawL4gISYwU97NYGUP48Nd8lCkWjDS46FYRVqi312eunxHXNbESv2djui02MmbsDL-r9h99PgR2-fHtmHrv6FVV9z0pzZpFiVpVbh-xmJ8-cXYZhV31WzM1MaGYFI4i7pIOHDZfhUBC9esZY1c4y3lFKpqYj-ZD-ZaWup2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster3}
            />
          </TouchableOpacity>
          <Text style={styles.deskripsi3}>Terpopuler</Text>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/b9e7/755d/136d8a791bce008eeb1180d95ad3a61a?Expires=1687737600&Signature=gzEUQO22bFpV6zQTlyrzNGJk0KgPrcGm4UcRMF9erdCSzNq1Vz6f1mkW8v0V~VWR9igT9Q0Y9FueZg9-iMkQrr-29xDCaKisJeW5YGaI85Hs0onfWN0Yhao5m-GUvkt-VcA9wduRXvLnIEPRLmPiE13PIJe7HnoU5KL-SVzJvTw8aFKjjebs~fn59Nv-s1ht59YMfeeLmkW7AwcSws8M-iB~8uk2Aw6BIbR7HVv0G-ZhLqe-LRxSBmt7QR1847d61Qs7GHdN1AhbBdCIuuETmBju3IW~L5dAKlLNploNzi4Uv2I8W-HG1MM~dSIuL~4BeHu1kgRatxG6444OPrPnTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster10}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/feea/1699/ac809c24bd989062369ef6f895082962?Expires=1687737600&Signature=px-HT9Fc-Gq6UoCkWFHZ6xZR5JGQJ399VICrbkyemOtj3Mgh-i531Z44HNgPA4ETbWgm65kscD6SneeFyCk6TixdD6y31LyZWiV~w2UmeEVe2QQipdjw38pXFT4E~YxBSDOZ~cZlYsomcskJDAtvQE5Zt6pamYRRWpGIsKNx3MsnSw1yxRsBApT1UprZtugtcAV2ZaXLDccm~ynncq0Ph1StUxWAu5I~MaYxCN25dP-94mOWRvKzdmK3urN-kA2uhOGnWIgzh9hj9p3wps9LcCKC5yoBIFm2SRbndJxKHC7CXpwYBXHtXV9L8ItxAU-MC1E1eWPxwIjzwhNg3hWx4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster11}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/6311/8041/f96c8eb3a28e51598f35e65fe69e3972?Expires=1687737600&Signature=qNplgcjkK6Vj-QazzvyFxUfBEWNJqUMOwzNts5R86qQ24Q-z4Dh7AjsY6KwOImwDgRB-T16gSNU2Epu6HLtrwKgOO~DkP2Hk4V3F-BKkN6Aw7K~XmEs7tS2wpGa1dcDcBot7ytHw8UGzMfsWqYKxqfbLll8J-BjzcGtwKqCRoH7OrvBonAEdFIDSxx2i9BtwHzuD-1OycueFJfnYeHKVan1kuyG3PmocuNUEMDnoKQvDIgZh6hoT87WbJjhDMXlZZnACE1~8Px3AtremqhoG8zEhj5nZ3KnMt~flHx~H2nB1HCFeSD~B9QWkN4s02AhSbzT6wsNhNmb4JH~h1n893Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.poster12}
            />
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/a701/32dc/b6b1e08a8727cc3d2c89812e87668fae?Expires=1687737600&Signature=iTanD~fBQvli-xz0isQhpIHtActqmhY-2loPiQuyhO5xC4adfk~iD3OBBI0YDKWpNz1~PcgipzUlujFIfJOFc-vV9UTqYUFPOMfyqUSwc8EgbBU2BYrguroK3vwg3WN33csUKXVRpaweQwa6Gv9P-MXZpUXtzdTfQmURsPAgkgcN1lP5esGsTNLIi4gtHRTC4kCnKLyaFBW5P~5SvT1G2xh2mpxzqnFA7Czo3hmrSxUfj2M47ndd8FhDQIskxgynNh2MOmiv6lcoRPMRFGZGIDbXUnhP6bLJwa8W5PbN7iSSIvnLTHbiG2Ma5llCC1AHpCibmKDQv1MQ4jaVkL2d9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.image}
            />
            <Text style={styles.bottomBarButton}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/ee74/0ca5/e88184ec1c9774db39145e4a17aa9b81?Expires=1687737600&Signature=kK4e8BapoMn0bIaDZSddIKxvepmTfL9lRXbZ6Ks3gQ5lVjg7TVQMpCjL35d6dIP85LNy~Lt2HDIc9yFso16s66GKdhODih~C-rLNyWINV4EqOIyMdxa0hAqsvfLvjPpgkDmLOpjJxW0Cb8oO1P3X3-5QhtdkdBT8TxdPF3f6PttV4IgB~e3EbP8sVtsY1H9BuudrXodOW6eROkl-tkuuuHQEg5kLU7CIzaamUAFBn2gRisQKsSAFrsUucYY0d9zcdWlMvgtV6ki9OOVi-NBAtlTzlZwJSto4wC32TvsK2dJDlsj0U2DPwOG94~Q4hamNJp2XxjIq4ODSRQLwuRXgwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.image}
            />
            <Text style={styles.bottomBarButton}>Serial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/0cb4/edc9/3dc10f137e456260482ce14f107ee5df?Expires=1687737600&Signature=NBneG3fGD3kT0MUgIQ3Upa4XOqUWmNpNEkTveNq63iCI6uVLqIdRGVVzW1egD2lpc7iySXa6UFH80FQGVAqAHVkRiRz9STmFCl7Ow0eEGSBNRsaZ6B9M-DbAFBLEB9mBvqXm6Mo0i2f8N7GO1hRrbiRTf4Vex5ZsiJDfqBZHhCi82bTlCHsix9C9pbwjd7JS8vNHCTslXbKSsQvpoj4eCFTNZ66OZLKmQJ-DbM6x5RcMGej~57jr-JeSuyUKlNF-4-TK0F0ZjULZSlgWdKRp7WL4cZHkg2AHCM2yS5H7t2L619c6Mj2CXfzSmXusVEwK7YkED7E0XJFXCKuS4wAPqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.image}
            />
            <Text style={styles.bottomBarButton}>Film</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/7d7c/78cd/f9a521a649d6d35142090de93190a637?Expires=1687737600&Signature=e6n6G3frcUStM8rlA1rHlHaM8rqT1i~If8kq4wakoBytpfd0Fc9QEF-C5XEUOani7JkuoB09dWTESfGBbi62Fnl6UoZTDVP04y3YFmUemYXMiRQMjDdrmFReL2iCSQUrqKNCJbLLqYmoh-P4gcDPuQ2p3a63edQgHJ9XT4OrpO18SWZ0piO~tuqgcfKCBpCMxzPmwRK2Podlsicjj5vCObiWDzrsbzAEWtjs92-hkyCG0lZKrughvyfiPBddba8tijaYy3B9wukgovnazt3eyqCLjj4LZWNgf-Td1czHJKLdpHGhYPl~mBcvFHXH5xREk8~MTzra9OYilWEHtDEbYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={styles.image}
            />
            <Text style={styles.bottomBarButton}>Pengaturan</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  searchBarContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  searchBar: {
    width: 228,
    borderWidth: 1.5,
    height: 40,
    borderRadius: 60,
    backgroundColor: '#D9D9D9',
    marginBottom: 5,
    top: -100
  },
  contentContainer: {
    paddingBottom: 0,
    paddingTop: 100,
  },
  menuItemContent: {
    padding: 0,
    marginBottom: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#030306',
    height: 50,
  },
  bottomBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  image: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  buttonbar: {
    width: 30,
    height: 30,
    margin: 10,
  },
  searchInput: {
    fontSize: 10,
    alignSelf: 'center',
    top: 4,
  },
  socialnav: {
    alignSelf: 'center',
    width: 16,
    height: 16,
    marginLeft: 35,
  },
  deskripsi1: {
    textAlign: 'left',
    color: 'white',
    top: -140,
  },
  deskripsi2: {
    textAlign: 'left',
    color: 'white',
    top: -485,
  },
  deskripsi3: {
    textAlign: 'left',
    color: 'white',
    top: -880,
  },
  logo: {
    width: 152,
    height: 59,
    marginTop: 10,
    top: -100,
  },
  poster1: {
    width: 350,
    height: 200,
    alignSelf: 'center',
    top: -480,
  },
  poster2: {
    width: 22,
    height: 200,
    top: -680,
    marginRight: 390,
  },
  poster3: {
    width: 22,
    height: 200,
    top: -880,
    marginLeft: 390,
  },
  poster6: {
    width: '30%',
    height: 177,
    marginRight: 290,
    top: -140,
  },
  poster7: {
    width: '30%',
    height: 177,
    alignSelf: 'center',
    top: -315,
  },
  poster8: {
    width: '30%',
    height: 177,
    marginLeft: 280,
    top: -490,
  },
  poster10: {
    width: '30%',
    height: 177,
    marginRight: 280,
    top: -870,
  },
  poster11: {
    width: '30%',
    height: 177,
    alignSelf: 'center',
    top: -1048,
  },
  poster12: {
    width: '30%',
    height: 177,
    marginLeft: 280,
    top: -1225,
  },
});
export default Home;