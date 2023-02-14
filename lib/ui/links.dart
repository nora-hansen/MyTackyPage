import 'package:flutter/material.dart';
import 'dart:html' as html;

class LinksPage extends StatelessWidget {
  const LinksPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Links'),
          backgroundColor: Colors.lightGreen,
        ),
        body: ListView(
          children: [
            ListTile(
              title: const Text('DeviantArt'),
              leading: const Image(
                image: AssetImage("../assets/images/da.jpg"),
                height: 100,
                width: 100,
              ),
              trailing: const Icon(Icons.brush),
              onTap: () {
                openLink("https://www.deviantart.com/ukitchen");
              },
            ),
            ListTile(
              title: const Text('Github (Source code)'),
              leading: const Image(
                image: AssetImage("../assets/images/gh.png"),
                height: 100,
                width: 100,
              ),
              trailing: const Icon(Icons.computer),
              onTap: () {
                openLink("https://github.com/nora-hansen/MyTackyPage");
              },
            ),
            ListTile(
              title: const Text('YouTube (Primary)'),
              leading: const Image(
                image: AssetImage("../assets/images/yt.png"),
                height: 100,
                width: 100,
              ),
              trailing: const Icon(Icons.music_note),
              onTap: () {
                openLink("https://www.youtube.com/@dronningnure");
              },
            ),
            ListTile(
              title: const Text('YouTube (Secondary)'),
              leading: const Image(
                image: AssetImage("../assets/images/yt.png"),
                height: 100,
                width: 100,
              ),
              trailing: const Icon(Icons.music_note),
              onTap: () {
                openLink("https://www.youtube.com/@nurenurenur5855");
              },
            ),
            ListTile(
              title: const Text('Twitter'),
              leading: const Image(
                image: AssetImage("../assets/images/tw.webp"),
                height: 100,
                width: 100,
              ),
              trailing: const Icon(Icons.chat_outlined),
              onTap: () {
                openLink("https://twitter.com/dronningnure");
              },
            ),
            ListTile(
              title: const Text('SoundCloud (Primary)'),
              leading: const Image(
                image: AssetImage("../assets/images/sc.jpg"),
                height: 100,
                width: 100,
              ),
              trailing: const Icon(Icons.music_note),
              onTap: () {
                openLink("https://soundcloud.com/noriakinure");
              },
            ),
            ListTile(
              title: const Text('SoundCloud (Secondary)'),
              leading: const Image(
                image: AssetImage("../assets/images/sc.jpg"),
                height: 100,
                width: 100,
              ),
              trailing: const Icon(Icons.music_note),
              onTap: () {
                openLink("https://soundcloud.com/user-978403960");
              },
            ),
            ListTile(
              title: const Text('Vocal Synth files (OneDrive)'),
              leading: const Image(
                image: AssetImage("../assets/images/od.png"),
                height: 100,
                width: 100,
              ),
              trailing: const Icon(Icons.folder),
              onTap: () {
                openLink(
                    "https://onedrive.live.com/?authkey=%21APBztetTVajwChg&id=70A3DF3CF58C6506%21490111&cid=70A3DF3CF58C6506");
              },
            ),
          ],
        ));
  }
}

void openLink(String url) {
  html.window.open(url, 'new tab');
}
