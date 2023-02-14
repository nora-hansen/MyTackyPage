import 'package:flutter/material.dart';

class LinksPage extends StatelessWidget {
  const LinksPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Links'),
        ),
        body: ListView(
          children: const [
            ListTile(
              title: Text('DeviantArt'),
              leading: Image(
                image: AssetImage("../assets/images/da.jpg"),
                height: 100,
                width: 100,
              ),
            ),
            ListTile(
              title: Text('Github (Source code)'),
              leading: Image(
                image: AssetImage("../assets/images/gh.png"),
                height: 100,
                width: 100,
              ),
            )
          ],
        ));
  }
}
