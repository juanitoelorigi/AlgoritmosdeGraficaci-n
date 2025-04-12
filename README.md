
---

# Simulador de Algoritmos y Métodos Estadísticos

**Un herramienta interactiva para generar números aleatorios, validar distribuciones y aplicar simulaciones de Monte Carlo**

---

## Descripción
Este proyecto es una aplicación web desarrollada con **HTML, CSS, JavaScript y Chart.js** que permite:
- Generar números aleatorios mediante algoritmos clásicos.
- Validar la calidad de estos números mediante pruebas estadísticas.
- Aplicar simulaciones de Monte Carlo para resolver problemas probabilísticos.

Dirigido a estudiantes, investigadores y profesionales en áreas como:
- Ciencia de datos
- Ingeniería
- Estadística aplicada
- Investigación operativa

---

## 🛠 Tecnologías utilizadas
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Visualización**: Chart.js (gráficos dinámicos)
- **Estructura**: Arquitectura modular con componentes reutilizables

---

## Contenido del repositorio
### Estructura de carpetas
```
📦 SRC
├── component/
│   ├── Algoritmos/          # Implementación de algoritmos de generación
│   │   ├── AProductos.js    # Algoritmo de productos medios
│   │   ├── ACuadrado.js     # Algoritmo de cuadrados medios
│   │   └── ...              # Otros algoritmos (Multiplicador, Congruencial, etc.)
│   ├── Validaciones/        # Pruebas de validación
│   │   ├── Media.js         # Prueba de media
│   │   ├── ChiCuadrada.js   # Prueba chi-cuadrada
│   │   └── ...              # Otras pruebas (Kolmogorov-Smirnov, Poker, etc.)
│   └── Montecarlo/          # Simulaciones de Monte Carlo
└── Assets/                  # Recursos estáticos (iconos, imágenes)
```

### Algoritmos implementados
#### Unidad 1: Generación de números aleatorios
- **Algoritmos básicos**:
  - Productos medios 
  - Cuadrados medios
  - Multiplicador constante
  - Congruencial aditivo
  - Blum Blum Shub
  - Lineal congruencial
  - Cuadrático congruencial

#### Unidad 2: Validación de números aleatorios
- **Pruebas estadísticas**:
  - Media
  - Varianza
  - Chi-cuadrada
  - Kolmogorov-Smirnov
  - Corridas arriba/abajo
  - Corridas respecto a la media
  - Prueba de poker
  - Prueba de huecos

#### Unidad Final: Simulación Monte Carlo
- **Aplicaciones**:
  - Modelado de sistemas estocásticos
  - Optimización bajo incertidumbre
  - Análisis de riesgo financiero
  - Predicción de eventos probabilísticos

---

## Características clave
1. **Interfaz intuitiva**: Navegación por unidades mediante elementos desplegables.
2. **Entrada dinámica**: Formularios adaptativos para cada algoritmo/prueba.
3. **Visualización en tiempo real**: Tablas y gráficos generados automáticamente.
4. **Exportación de resultados**: Opción para guardar datos en formato CSV/PDF.

---

## Instalación
```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/simulador-algoritmos.git

# Abre el archivo principal
cd simulador-algoritmos
open index.html
```

---

## Uso
1. Selecciona la unidad deseada (ej: "Generación de números aleatorios").
2. Elige un algoritmo específico (ej: "Productos medios").
3. Ingresa los parámetros requeridos (semilla, iteraciones).
4. Visualiza los resultados en tablas y gráficos interactivos.

---

## Contribuciones
¡Bienvenidas todas las mejoras! Para contribuir:
1. Crea un fork del repositorio.
2. Realiza cambios en una nueva rama.
3. Envía un pull request detallando las modificaciones.

---

## Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).

---

## Contacto
Para consultas o sugerencias:
- Email: morenogjuanma@gmail.com
- GitHub: juanitoelorigi
- instragram: @jmmzz18

---

## ¿Por qué usar este proyecto?
- **Educación**: Ideal para enseñar conceptos de probabilidad y simulación.
- **Investigación**: Herramienta práctica para validar modelos matemáticos.
- **Desarrollo**: Base para integrar algoritmos en aplicaciones más complejas.

---

**¡Gracias por usar mi simulador!**  
*Última actualización: [12/04/2025]*

---
