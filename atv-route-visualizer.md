---
name: atv-route-visualizer
description: Structure clear, scannable dashboard-like cards or sections detailing specific ATV routes, difficulty indicators, terrain types, and trail durations.
---

# Skill: Dynamic Route & Terrain Visualizer
# Context: Information architecture for ATV trails.
# Stack: Tailwind CSS, Vanilla JS / React.

## Purpose
Structure clear, scannable dashboard-like cards or sections detailing specific ATV routes, difficulty indicators, terrain types, and trail durations.

## Data Structure to Render
- **Nome da Rota:** (e.g., Trilha da Lama Extrema, Rota dos Mirantes)
- **Duração:** (e.g., 1h30, 2h40)
- **Dificuldade:** (Fácil, Moderado, Difícil - styled with green, yellow, red indicators)
- **Terreno:** (e.g., Areia, Lama, Mata Fechada)
- **Incluso:** (e.g., Capacete, Guia, Treinamento Prévio)

## Guidelines
1. Use compact badges for quick parameters (Duration, Difficulty).
2. Create step-by-step point indicators to show progress/stops on the route.
3. Keep layout fully responsive, collapsing cleanly on mobile viewports.
