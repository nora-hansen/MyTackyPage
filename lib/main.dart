import 'package:flutter/material.dart';
import 'package:nurenur/ui/home.dart';
import 'package:nurenur/ui/about.dart';
import 'package:nurenur/ui/links.dart';
import 'package:nurenur/ui/soundcloud.dart';
import 'package:nurenur/ui/js_bull.dart';
import 'package:nurenur/ui/thanks.dart';

void main() {
  runApp(const MyApp());
}

List<Widget> bodyWidgets = [
  const HomePage(),
  const AboutPage(),
  const LinksPage(),
  const JsPage(),
  const SoundCloudPage(),
  const ThanksPage()
];
int index = 0;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Nure\'s Tacky Website',
      theme: ThemeData(
        primarySwatch: Colors.pink,
      ),
      home: const MyHomePage(title: 'Nure\'s Tacky Website'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Widget widgetForBody = const HomePage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      drawer: Drawer(
        backgroundColor: Colors.black,
        child: ListView(
          // Remove padding from the ListView ?
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text(
                'Pages',
                style: TextStyle(
                  fontSize: 30,
                  color: Colors.white,
                ),
              ),
            ),
            ListTile(
              title: const Text(
                'Home',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
              trailing: const Icon(Icons.home_filled, color: Colors.white),
              onTap: () {
                setState(() {
                  index = 0;
                });
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text(
                'About',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
              trailing: const Icon(Icons.question_mark, color: Colors.white),
              onTap: () {
                setState(() {
                  index = 1;
                });
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text(
                'Links',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
              trailing: const Icon(Icons.directions_run, color: Colors.white),
              onTap: () {
                setState(() {
                  index = 2;
                });
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text(
                'JavaScript Bull',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
              trailing: const Icon(Icons.quiz, color: Colors.white),
              onTap: () {
                setState(() {
                  index = 3;
                });
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text(
                'SoundCloud',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
              trailing: const Icon(Icons.music_note, color: Colors.white),
              onTap: () {
                setState(() {
                  index = 4;
                });
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text(
                'Thanks',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
              trailing: const Icon(Icons.thumb_up, color: Colors.white),
              onTap: () {
                setState(() {
                  index = 5;
                });
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
      body: bodyWidgets[index],
    );
  }
}
