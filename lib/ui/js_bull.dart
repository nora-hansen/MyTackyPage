import 'package:flutter/material.dart';

class JsPage extends StatelessWidget {
  const JsPage({super.key});

  @override
  // ignore: library_private_types_in_public_api
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'JavaScript bullshit',
        ),
        backgroundColor: Colors.deepPurple,
      ),
      body: const Text(
        'Might have to rename to Dart bullshit, who knows!',
      ),
    );
  }
}
