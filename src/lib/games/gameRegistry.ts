// Central Game Registry for all 21 games in Typing Game Zone

import { type BaseGame } from './GameEngine';
import { TypeDefenderGame } from './TypeDefenderGame';
import { MeteorStrikeGame } from './MeteorStrikeGame';
import { RetroInvadersGame } from './RetroInvadersGame';
import { LaserTurretGame } from './LaserTurretGame';
import { CyberHackerGame } from './CyberHackerGame';
import { ZombieHordeGame } from './ZombieHordeGame';
import { NeonNinjaGame } from './NeonNinjaGame';
import { RoboRampageGame } from './RoboRampageGame';
import { DungeonEscapeGame } from './DungeonEscapeGame';
import { SpaceRacerGame } from './SpaceRacerGame';
import { SkyClimberGame } from './SkyClimberGame';
import { DeepSeaGame } from './DeepSeaGame';
import { StreetFighterGame } from './StreetFighterGame';
import { WizardDuelGame } from './WizardDuelGame';
import { SamuraiShowdownGame } from './SamuraiShowdownGame';
import { GladiatorArenaGame } from './GladiatorArenaGame';
import { WordTetrisGame } from './WordTetrisGame';
import { RhythmBeatGame } from './RhythmBeatGame';
import { SpeedTyperProGame } from './SpeedTyperProGame';
import { GhostBusterGame } from './GhostBusterGame';
import { KeyMasterGame } from './KeyMasterGame';

export type GameCategory = 'arcade' | 'action' | 'adventure' | 'fighting' | 'puzzle' | 'practice';

export interface GameMetadata {
  id: string;
  title: string;
  category: GameCategory;
  categoryName: string;
  description: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  tags: string[];
  bannerGradient: string;
  factory: (canvas: HTMLCanvasElement) => BaseGame;
}

export const GAME_REGISTRY: Record<string, GameMetadata> = {
  'type-defender': {
    id: 'type-defender',
    title: 'Type Defender',
    category: 'arcade',
    categoryName: 'Arcade',
    description: 'Defend Earth orbit from an alien armada. Shoot laser cannons and take down the Mothership.',
    icon: '🛸',
    difficulty: 'Intermediate',
    tags: ['Space', 'Lasers', 'Boss Fight'],
    bannerGradient: 'from-blue-600 to-cyan-400',
    factory: (canvas) => new TypeDefenderGame(canvas)
  },
  'meteor-strike': {
    id: 'meteor-strike',
    title: 'Meteor Strike',
    category: 'arcade',
    categoryName: 'Arcade',
    description: 'Destroy burning comets and orbital debris threatening the planetary defense shield.',
    icon: '☄️',
    difficulty: 'Intermediate',
    tags: ['Planetary', 'Explosions', 'Power-ups'],
    bannerGradient: 'from-red-600 to-amber-400',
    factory: (canvas) => new MeteorStrikeGame(canvas)
  },
  'retro-invaders': {
    id: 'retro-invaders',
    title: 'Retro 8-Bit Invaders',
    category: 'arcade',
    categoryName: 'Arcade',
    description: 'Authentic CRT pixel arcade alien formation march. Blast invaders and hunt mystery UFOs.',
    icon: '👾',
    difficulty: 'Beginner',
    tags: ['Pixel Art', 'Retro', 'Classic'],
    bannerGradient: 'from-purple-600 to-pink-500',
    factory: (canvas) => new RetroInvadersGame(canvas)
  },
  'laser-turret': {
    id: 'laser-turret',
    title: 'Laser Turret 360',
    category: 'arcade',
    categoryName: 'Arcade',
    description: 'Aim and fire 360-degree railgun lasers against incoming orbital drone swarms.',
    icon: '🎯',
    difficulty: 'Advanced',
    tags: ['Radar', 'Radial', 'Fast Reflexes'],
    bannerGradient: 'from-teal-600 to-emerald-400',
    factory: (canvas) => new LaserTurretGame(canvas)
  },
  'cyber-hacker': {
    id: 'cyber-hacker',
    title: 'Cyber Hacker',
    category: 'action',
    categoryName: 'Action',
    description: 'Infiltrate encrypted corporate nodes and override the Quantum Core before the ICE trace reaches 100%.',
    icon: '💻',
    difficulty: 'Advanced',
    tags: ['Matrix', 'Cyberpunk', 'Hacking'],
    bannerGradient: 'from-green-600 to-emerald-400',
    factory: (canvas) => new CyberHackerGame(canvas)
  },
  'zombie-horde': {
    id: 'zombie-horde',
    title: 'Zombie Horde',
    category: 'action',
    categoryName: 'Action',
    description: 'Hold the barricade against infected runners, riot brutes, and the Colossal Abomination.',
    icon: '🧟',
    difficulty: 'Intermediate',
    tags: ['Survival', 'Zombies', 'Headshots'],
    bannerGradient: 'from-rose-700 to-purple-800',
    factory: (canvas) => new ZombieHordeGame(canvas)
  },
  'neon-ninja': {
    id: 'neon-ninja',
    title: 'Neon Ninja',
    category: 'action',
    categoryName: 'Action',
    description: 'Slice through flying shurikens and elemental lanterns with lightning-fast katana blade trails.',
    icon: '🥷',
    difficulty: 'Intermediate',
    tags: ['Katana', 'Slicing', 'Ninja'],
    bannerGradient: 'from-pink-600 to-cyan-400',
    factory: (canvas) => new NeonNinjaGame(canvas)
  },
  'robo-rampage': {
    id: 'robo-rampage',
    title: 'Robo Rampage',
    category: 'action',
    categoryName: 'Action',
    description: 'Pilot an armored assault mech walker through a futuristic metropolis against rogue titan drones.',
    icon: '🤖',
    difficulty: 'Advanced',
    tags: ['Mechs', 'Missiles', 'Sci-Fi'],
    bannerGradient: 'from-blue-700 to-red-500',
    factory: (canvas) => new RoboRampageGame(canvas)
  },
  'dungeon-escape': {
    id: 'dungeon-escape',
    title: 'Dungeon Escape',
    category: 'adventure',
    categoryName: 'Adventure',
    description: 'Auto-running adventurer leaping over spike pits, sliding under blades, and escaping the Dragon Lair.',
    icon: '🗝️',
    difficulty: 'Beginner',
    tags: ['Runner', 'Traps', 'Platformer'],
    bannerGradient: 'from-amber-700 to-yellow-500',
    factory: (canvas) => new DungeonEscapeGame(canvas)
  },
  'space-racer': {
    id: 'space-racer',
    title: 'Space Racer',
    category: 'adventure',
    categoryName: 'Adventure',
    description: 'Hyper-speed synthwave highway racing. Hit warp gates, nitro boost, and overtake rivals.',
    icon: '🏎️',
    difficulty: 'Advanced',
    tags: ['Synthwave', '3D Warp', 'Racing'],
    bannerGradient: 'from-fuchsia-600 to-cyan-400',
    factory: (canvas) => new SpaceRacerGame(canvas)
  },
  'sky-climber': {
    id: 'sky-climber',
    title: 'Sky Climber',
    category: 'adventure',
    categoryName: 'Adventure',
    description: 'Bounce across floating clouds, bouncy mushrooms, and ascend toward cosmic orbit.',
    icon: '☁️',
    difficulty: 'Beginner',
    tags: ['Jumper', 'Clouds', 'Altitude'],
    bannerGradient: 'from-sky-400 to-indigo-500',
    factory: (canvas) => new SkyClimberGame(canvas)
  },
  'deep-sea': {
    id: 'deep-sea',
    title: 'Deep Sea Submarine',
    category: 'adventure',
    categoryName: 'Adventure',
    description: 'Explore the Mariana Trench with sonar pulses, discovering glowing jellyfish and the Kraken.',
    icon: '🌊',
    difficulty: 'Intermediate',
    tags: ['Ocean', 'Sonar', 'Bioluminescence'],
    bannerGradient: 'from-blue-900 to-teal-500',
    factory: (canvas) => new DeepSeaGame(canvas)
  },
  'street-fighter': {
    id: 'street-fighter',
    title: 'Street Fighter Typer',
    category: 'fighting',
    categoryName: 'Fighting',
    description: '2D martial arts arena combat. Execute punches, kicks, and fiery Hadoken super combos!',
    icon: '🥊',
    difficulty: 'Advanced',
    tags: ['Martial Arts', 'Combos', 'Hadoken'],
    bannerGradient: 'from-red-600 to-amber-500',
    factory: (canvas) => new StreetFighterGame(canvas)
  },
  'wizard-duel': {
    id: 'wizard-duel',
    title: 'Wizard Duel',
    category: 'fighting',
    categoryName: 'Fighting',
    description: 'Conjure Fireball, Frost Nova, and Lightning incantations against rival archmages.',
    icon: '🧙‍♂️',
    difficulty: 'Advanced',
    tags: ['Magic', 'Spells', 'Arcane'],
    bannerGradient: 'from-purple-700 to-pink-500',
    factory: (canvas) => new WizardDuelGame(canvas)
  },
  'samurai-showdown': {
    id: 'samurai-showdown',
    title: 'Samurai Showdown',
    category: 'fighting',
    categoryName: 'Fighting',
    description: 'Cinematic sunset quickdraw standoff. Wait for the signal and strike with sub-second precision.',
    icon: '⚔️',
    difficulty: 'Expert',
    tags: ['Quickdraw', 'One-Cut', 'Samurai'],
    bannerGradient: 'from-rose-800 to-amber-600',
    factory: (canvas) => new SamuraiShowdownGame(canvas)
  },
  'gladiator-arena': {
    id: 'gladiator-arena',
    title: 'Gladiator Arena',
    category: 'fighting',
    categoryName: 'Fighting',
    description: 'Colosseum battle for survival against hungry lions, spearmen, and chariot champions.',
    icon: '🛡️',
    difficulty: 'Intermediate',
    tags: ['Colosseum', 'Sword', 'Shield'],
    bannerGradient: 'from-yellow-700 to-orange-500',
    factory: (canvas) => new GladiatorArenaGame(canvas)
  },
  'word-tetris': {
    id: 'word-tetris',
    title: 'Word Tetris',
    category: 'puzzle',
    categoryName: 'Puzzle',
    description: 'Type falling word tetrominoes to dissolve blocks and clear lines before reaching the danger ceiling.',
    icon: '🧩',
    difficulty: 'Intermediate',
    tags: ['Blocks', 'Tetris', 'Puzzle'],
    bannerGradient: 'from-indigo-600 to-pink-500',
    factory: (canvas) => new WordTetrisGame(canvas)
  },
  'rhythm-beat': {
    id: 'rhythm-beat',
    title: 'Rhythm Beat Typer',
    category: 'puzzle',
    categoryName: 'Rhythm',
    description: '4-lane synthwave musical track. Hit words in sync with escalating BPM tempos.',
    icon: '🎵',
    difficulty: 'Expert',
    tags: ['Music', 'Synthwave', 'BPM'],
    bannerGradient: 'from-violet-600 to-cyan-400',
    factory: (canvas) => new RhythmBeatGame(canvas)
  },
  'speed-typer-pro': {
    id: 'speed-typer-pro',
    title: 'Speed Typer Pro',
    category: 'action',
    categoryName: 'Racing',
    description: 'Olympic drag race sprint with real-time speedometer telemetry against competitive AI ghost bots.',
    icon: '🏎️',
    difficulty: 'Intermediate',
    tags: ['Drag Race', 'Speedometer', 'AI Bots'],
    bannerGradient: 'from-blue-600 to-emerald-400',
    factory: (canvas) => new SpeedTyperProGame(canvas)
  },
  'ghost-buster': {
    id: 'ghost-buster',
    title: 'Ghost Buster',
    category: 'puzzle',
    categoryName: 'Casual',
    description: 'Aim proton vacuum beams at floating mansion ghosts and seal them in containment traps.',
    icon: '👻',
    difficulty: 'Beginner',
    tags: ['Haunted', 'Proton Beam', 'Ghosts'],
    bannerGradient: 'from-purple-800 to-teal-400',
    factory: (canvas) => new GhostBusterGame(canvas)
  },
  'key-master': {
    id: 'key-master',
    title: 'Key Master',
    category: 'practice',
    categoryName: 'Practice',
    description: 'Interactive 3D keyboard heatmap, finger placement zones, and touch-typing drills.',
    icon: '⌨️',
    difficulty: 'Beginner',
    tags: ['Heatmap', 'Home Row', 'Touch Typing'],
    bannerGradient: 'from-teal-600 to-blue-500',
    factory: (canvas) => new KeyMasterGame(canvas)
  }
};

export const ALL_GAMES: GameMetadata[] = Object.values(GAME_REGISTRY);

export function getGameById(id: string): GameMetadata | undefined {
  return GAME_REGISTRY[id];
}
