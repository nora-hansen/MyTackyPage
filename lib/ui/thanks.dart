import 'package:flutter/material.dart';

class ThanksPage extends StatelessWidget {
  const ThanksPage({super.key});

  @override
  // ignore: library_private_types_in_public_api
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Special Thanks',
        ),
        backgroundColor: Colors.red,
      ),
      body: const Text(
        'Special thanks to my bish and her dad for making this possible! <3',
      ),
    );
  }
}
