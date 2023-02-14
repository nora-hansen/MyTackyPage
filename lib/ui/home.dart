import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  // ignore: library_private_types_in_public_api
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Home',
        ),
      ),
      body: const Text(
        'This is the home page! Empty mpty mty mt  oh my god',
      ),
    );
  }
}
