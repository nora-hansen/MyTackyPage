import 'package:flutter/material.dart';
import 'package:flutter_html/flutter_html.dart';

const htmlData = """
<iframe width="100%" height="300" scrolling="no" frameborder="no" 
allow="autoplay" 
src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1570278100&color=%23c48484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
</iframe><div style="font-size: 10px; color: #cccccc;line-break: 
anywhere;word-break: normal;overflow: hidden;white-space: nowrap;
text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans 
Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
<a href="https://soundcloud.com/noriakinure" title="noriaki(nure)" 
target="_blank" style="color: #cccccc; text-decoration: none;">noriaki(nure)</a>
 · <a href="https://soundcloud.com/noriakinure/sets/mixtape-for-nurenur-eu" 
 title="Mixtape (for nurenur.eu)" target="_blank" style="color: #cccccc; 
 text-decoration: none;">Mixtape (for nurenur.eu)</a></div>""";

class SoundCloudPage extends StatelessWidget {
  const SoundCloudPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('SoundCloud'),
          backgroundColor: Colors.orange,
        ),
        body: ListView(children: [
          const ListTile(
              title: Text('My epic SoundCloud mixtape. It is fire'),
              trailing: Icon(
                Icons.audiotrack,
                color: Colors.orange,
              )),
          Html(
            data: htmlData,
          ),
        ]));
  }
}
