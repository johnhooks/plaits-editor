import type { MidiDevices } from './src/midi_devices';

declare global {
  interface Window {
    Midi: { Devices: MidiDevices };
    PatchBankApp: {
      update(note: number, velocity: number): void;
    };
  }
}
