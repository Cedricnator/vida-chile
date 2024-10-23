import 'package:flutter/material.dart';

class FormProgressManager extends StatefulWidget {
  const FormProgressManager({
    super.key,
    required this.actualPage,
    required this.totalPages,
    required this.onPageChanged, // Callback para cambio de página
  });

  final int actualPage;
  final int totalPages;
  final ValueChanged<int> onPageChanged; // Definir callback

  @override
  State<FormProgressManager> createState() => _FormProgressManagerState();
}

class _FormProgressManagerState extends State<FormProgressManager> {
  @override
  Widget build(BuildContext context) {
    // Calcular el progreso basado en las páginas actuales
    double progress = widget.actualPage / widget.totalPages;

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              // Botón "Anterior"
              TextButton(
                onPressed: () {
                  if (widget.actualPage > 1) {
                    widget.onPageChanged(
                        widget.actualPage - 1); // Dispara el callback
                  }
                },
                child: const Text('Anterior'),
              ),
              Text('Página ${widget.actualPage} de ${widget.totalPages}'),

              // Botón "Siguiente"
              TextButton(
                onPressed: () {
                  if (widget.actualPage < widget.totalPages) {
                    widget.onPageChanged(
                        widget.actualPage + 1); // Dispara el callback
                  }
                },
                child: const Text('Siguiente'),
              ),
            ],
          ),
          const SizedBox(height: 8),
          LinearProgressIndicator(
            value: progress, // Progreso dinámico
            minHeight: 8,
          ),
        ],
      ),
    );
  }
}
