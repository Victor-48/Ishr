// ============================================================
// QUESTIONS DATA MODULE
// To add new questions, append to the QUESTIONS array below.
// Supported types: "checkbox", "radio", "dropdown", "order", "match-dropdown"
// ============================================================

const QUESTIONS = [

  // ── Q1 ──────────────────────────────────────────────────────
  {
    id: 1,
    type: "match-dropdown",
    text: "Ce tipuri de procesoare sunt următoarele:",
    rows: ["IBM PowerPC 405/450", "ARM Cortex-A9", "MicroBlaze", "Picoblaze"],
    options: ["Hard-core procesor", "soft-core procesor"],
    correct: {
      "IBM PowerPC 405/450": "Hard-core procesor",
      "ARM Cortex-A9":       "Hard-core procesor",
      "MicroBlaze":          "soft-core procesor",
      "Picoblaze":           "soft-core procesor"
    }
  },

  // ── Q2 ──────────────────────────────────────────────────────
  {
    id: 2,
    type: "radio",
    text: "Care va fi rezultatul operației 3'b100 | 4'b1000 în limbajul Verilog?",
    options: ["4'b1100", "4'b1000", "3'b100", "4'b1111"],
    correct: "4'b1100"
  },

  // ── Q3 ──────────────────────────────────────────────────────
  {
    id: 3,
    type: "match-dropdown",
    text: "Răspundeți la întrebările legate de circuitul din figură (Slices/Logic Cells):",
    rows: [
      "Cele două zone încadrate cu linie punctată reprezintă o ...",
      "Circuitul din figură este un ..."
    ],
    options: ["Celulă logică", "Slice", "MUX", "LUT"],
    correct: {
      "Cele două zone încadrate cu linie punctată reprezintă o ...": "Celulă logică",
      "Circuitul din figură este un ...": "Slice"
    }
  },

  // ── Q4 ──────────────────────────────────────────────────────
  {
    id: 4,
    type: "radio",
    text: "Care este rezultatul corect al operației următoare de tip bit reduction: &4'b1101 =",
    options: ["1'b0", "1'b1", "4'b1101", "0"],
    correct: "1'b0"
  },

  // ── Q5 ──────────────────────────────────────────────────────
  {
    id: 5,
    type: "radio",
    text: "Rezultatul expresiei {2'b11, 2'b10, 2'b01} în limbaj Verilog, este:",
    options: ["6'b111001", "6'b110110", "6'b011011", "2'b11"],
    correct: "6'b111001"
  },

  // ── Q6 ──────────────────────────────────────────────────────
  {
    id: 6,
    type: "radio",
    text: "În legătură cu programabilitatea circuitelor FPGA, care dintre afirmațiile următoare este falsă? Circuitele FPGA se pot programa...",
    options: [
      "Ori de câte ori folosind protocolul USB",
      "Ori de câte ori folosind protocolul JTAG",
      "La fiecare pornire, în mod automat dintr-o memorie conectată la circuit",
      "Se pot reconfigura parțial în timpul funcționării"
    ],
    correct: "Ori de câte ori folosind protocolul USB"
  },

  // ── Q7 ──────────────────────────────────────────────────────
  {
    id: 7,
    type: "match-dropdown",
    text: "Despre circuitul din figură (matrice programabilă) se poate afirma:",
    rows: [
      "Funcția A·C_bar·D + B_bar·D_bar + C·D_bar·E_bar + C·D_bar·E va fi generată la ieșirea:",
      "Este un circuit de tip"
    ],
    options: ["Z", "X", "Y", "W", "PLA", "PAL", "ROM"],
    correct: {
      "Funcția A·C_bar·D + B_bar·D_bar + C·D_bar·E_bar + C·D_bar·E va fi generată la ieșirea:": "Z",
      "Este un circuit de tip": "PLA"
    }
  },

  // ── Q8 ──────────────────────────────────────────────────────
  {
    id: 8,
    type: "match-dropdown",
    text: "Dacă x = 8'b10100101, care va fi valoarea lui x după următoarele instrucțiuni de deplasare:",
    rows: ["x >> 2", "x >>> 2", "x << 2", "x <<< 2"],
    options: ["8'b00101001", "8'b11101001", "8'b10010100"],
    correct: {
      "x >> 2":   "8'b00101001",
      "x >>> 2":  "8'b11101001",
      "x << 2":   "8'b10010100",
      "x <<< 2":  "8'b10010100"
    }
  },

  // ── Q9 ──────────────────────────────────────────────────────
  {
    id: 9,
    type: "checkbox",
    text: "Care dintre afirmațiile de mai jos sunt adevărate cu privire la instrucțiunea always?",
    options: [
      "Blocurile always multiple sunt executate în paralel (și în paralel cu cu assign)",
      "Cu instrucțiunea always se poate atribui valoare doar unei variabile de tip wire",
      "Într-un bloc always se pot face și atribuiri de tip assign",
      "Cu instrucțiunea always se poate atribui valoare doar unei variabile de tip reg"
    ],
    correct: [
      "Blocurile always multiple sunt executate în paralel (și în paralel cu cu assign)",
      "Cu instrucțiunea always se poate atribui valoare doar unei variabile de tip reg"
    ]
  },

  // ── Q10 ─────────────────────────────────────────────────────
  {
    id: 10,
    type: "match-dropdown",
    text: "Despre slice-urile stânga și dreapta se pot afirma următoarele:",
    rows: [
      "Funcționalitate completă = se poate folosi pentru implementare de logică, memorie, sau Shift register",
      "Funcționalitate limitată = se poate folosi doar pentru implementare de logică"
    ],
    options: ["SLICEM", "SLICEL"],
    correct: {
      "Funcționalitate completă = se poate folosi pentru implementare de logică, memorie, sau Shift register": "SLICEM",
      "Funcționalitate limitată = se poate folosi doar pentru implementare de logică": "SLICEL"
    }
  },

  // ── Q11 ─────────────────────────────────────────────────────
  {
    id: 11,
    type: "checkbox",
    text: "Care afirmație este adevărată în legătură cu circuitele logice programabile de tip GAL?",
    options: [
      "La intersecția conexiunilor orizontale și verticale se află conexiuni fuzibile",
      "Aria OR a circuitului GAL este programabilă, aria AND este fixă",
      "Arderea conexiunilor este posibilă o singură dată",
      "Circuitele GAL sunt reprogramabile",
      "Aria AND a circuitului GAL este programabilă, aria OR este fixă",
      "Ambele arii ale circuitelor GAL (AND, OR) sunt fixe"
    ],
    correct: [
      "Circuitele GAL sunt reprogramabile",
      "Aria AND a circuitului GAL este programabilă, aria OR este fixă"
    ]
  },

  // ── Q12 ─────────────────────────────────────────────────────
  {
    id: 12,
    type: "order",
    text: "Ordonați etapele proiectării cu circuite FPGA (design flow):",
    items: [
      "Descriere proiect",
      "Simulare comportamentală",
      "Sinteză",
      "Implementare",
      "Analiza în domeniul timp",
      "Crearea bitstream"
    ],
    correct: [
      "Descriere proiect",
      "Simulare comportamentală",
      "Sinteză",
      "Implementare",
      "Analiza în domeniul timp",
      "Crearea bitstream"
    ]
  },

  // ── Q13 ─────────────────────────────────────────────────────
  {
    id: 13,
    type: "radio",
    text: "Care dintre următoarele componente fac parte din structura generală a unui circuit FPGA Xilinx (fără resurse dedicate)?",
    options: ["CLB, IOB, EEPROM", "BlokkRAM", "Multiplicatoare", "CLB, IOB, conexiuni"],
    correct: "CLB, IOB, conexiuni"
  },

  // ── Q14 ─────────────────────────────────────────────────────
  {
    id: 14,
    type: "match-dropdown",
    text: "În legătură cu procesul de proiectare cu circuite FPGA alegeți perechile corespunzătoare:",
    rows: [
      "plasare fizică și conectare",
      "creează o descriere generală folosind porți logice și bistabile (FF)",
      "mapare tehnologică implementare folosind primitivele circuitului FPGA folosit (LUT, bistabile...)"
    ],
    options: ["PAR", "Sinteza", "Map", "Translate", "IMPACT"],
    correct: {
      "plasare fizică și conectare": "PAR",
      "creează o descriere generală folosind porți logice și bistabile (FF)": "Sinteza",
      "mapare tehnologică implementare folosind primitivele circuitului FPGA folosit (LUT, bistabile...)": "Map"
    }
  },

  // ── Q15 ─────────────────────────────────────────────────────
  {
    id: 15,
    type: "radio",
    text: "Memoria de configurare a unui circuit Xilinx FPGA este de tip:",
    options: ["antifuse", "SRAM + multiplexor", "SRAM", "EEPROM", "flash"],
    correct: "SRAM"
  },

  // ── Q16 ─────────────────────────────────────────────────────
  {
    id: 16,
    type: "order",
    text: "Așezați în ordine descrescătoare a capacității de procesare următoarele circuite:",
    items: ["ASIC", "FPGA", "procesor"],
    correct: ["ASIC", "FPGA", "procesor"]
  },

  // ── Q17 ─────────────────────────────────────────────────────
  {
    id: 17,
    type: "match-dropdown",
    text: "Alcătuiți perechile potrivite bazate pe arhitectura FPGA Xilinx:",
    rows: ["CLB", "Logic cell", "Slice"],
    options: [
      "2 sau 4 Slice în funcție de familie",
      "1 LUT + 1 FF",
      "2 sau 4 LC în funcție de familie",
      "Conexiuni programabile"
    ],
    correct: {
      "CLB": "2 sau 4 Slice în funcție de familie",
      "Logic cell": "1 LUT + 1 FF",
      "Slice": "2 sau 4 LC în funcție de familie"
    }
  },

  // ── Q18 ─────────────────────────────────────────────────────
  {
    id: 18,
    type: "checkbox",
    text: "Care dintre următoarele componente sunt în componența circuitelor FPGA Xilinx?",
    options: [
      "Conexiuni programabile",
      "BlokkRAM",
      "CLB: blocuri logice configurabile",
      "EEPROM",
      "IOB: blocuri intrare/ieșire",
      "Multiplicatoare dedicate"
    ],
    correct: [
      "Conexiuni programabile",
      "BlokkRAM",
      "CLB: blocuri logice configurabile",
      "IOB: blocuri intrare/ieșire",
      "Multiplicatoare dedicate"
    ]
  },

  // ── Q19 ─────────────────────────────────────────────────────
  {
    id: 19,
    type: "radio",
    text: "Ce expresie logică implementează un circuit PAL?",
    options: ["A. DeMorgan", "B. Product-of-Sum", "C. Sum-of-Product", "D. B și C"],
    correct: "C. Sum-of-Product"
  },

  // ── Q20 ─────────────────────────────────────────────────────
  {
    id: 20,
    type: "checkbox",
    text: "Setul de instrucțiuni a microcontrolerului PicoBlaze este caracterizat de:",
    options: [
      "Durata de execuție a instrucțiunilor este constantă indiferent de instrucțiune și este de 2 perioade de clock",
      "Este foarte complex",
      "Instrucțiunile sunt pe 18 biți",
      "Instrucțiunile sunt pe 10 biți",
      "Durata de execuție a instrucțiunilor depinde de complexitatea acestora",
      "Instrucțiunile sunt pe 8 biți"
    ],
    correct: [
      "Durata de execuție a instrucțiunilor este constantă indiferent de instrucțiune și este de 2 perioade de clock",
      "Instrucțiunile sunt pe 18 biți"
    ]
  },

  // ── Q21 ─────────────────────────────────────────────────────
  {
    id: 21,
    type: "radio",
    text: "Care dintre afirmațiile de mai jos este falsă în legătură cu limbajele HDL?",
    options: [
      "Permite proiectarea modulară",
      "Practic descrie o funcționare paralelă, concurentă în timp",
      "Este o descriere secvențială",
      "Nu este un software care se execută secvențial"
    ],
    correct: "Este o descriere secvențială"
  },

  // ── Q22 ─────────────────────────────────────────────────────
  {
    id: 22,
    type: "radio",
    text: "Care dintre afirmațiile următoare este adevărată în legătură cu circuitele logice programabile CPLD și FPGA?",
    options: [
      "Configurația circuitelor CPLD este memorată în memorii SRAM",
      "Circuitele FPGA sunt mai ușor de programat decât cele CPLD",
      "Configurația circuitelor CPLD este memorată în memorii FLASH sau EEPROM",
      "Circuitele CPLD sunt de complexitate mai mare"
    ],
    correct: "Configurația circuitelor CPLD este memorată în memorii FLASH sau EEPROM"
  },

  // ── Q23 ─────────────────────────────────────────────────────
  {
    id: 23,
    type: "order",
    text: "Ordonați etapele de simulare/verificare în cazul proiectării cu circuite FPGA:",
    items: [
      "Simulare comportamentală (Behavioral Simulation)",
      "Simulare funcțională (Functional Simulation)",
      "Analiza statică de timp",
      "Simulare în domeniul timp (Timing Simulation)",
      "Depanare (Debug/ In-Circuit Verification)"
    ],
    correct: [
      "Simulare comportamentală (Behavioral Simulation)",
      "Simulare funcțională (Functional Simulation)",
      "Analiza statică de timp",
      "Simulare în domeniul timp (Timing Simulation)",
      "Depanare (Debug/ In-Circuit Verification)"
    ]
  },

  // ── Q24 ─────────────────────────────────────────────────────
  {
    id: 24,
    type: "order",
    text: "Așezați în ordine descrescătoare din punct de vedere a timpului de dezvoltare următoarele circuite (de la cel mai lung la cel mai scurt):",
    items: ["ASIC", "FPGA", "procesor"],
    correct: ["ASIC", "FPGA", "procesor"]
  },

  // ── Q25 ─────────────────────────────────────────────────────
  {
    id: 25,
    type: "checkbox",
    text: "Microcontrolerul PicoBlaze are următoarele caracteristici legate de magistrale și arhitectură:",
    options: [
      "Magistrala de adrese este pe 8 biți",
      "Magistrala de adrese este pe 18 biți",
      "Magistrala de adrese este pe 10 (sau 12) biți",
      "Este un microcontroler pe 8 biți",
      "Este un microcontroler pe 18 biți"
    ],
    correct: [
      "Este un microcontroler pe 8 biți",
      "Magistrala de adrese este pe 10 (sau 12) biți"
    ]
  },

  // ── Q26 ─────────────────────────────────────────────────────
  {
    id: 26,
    type: "match-dropdown",
    text: "Următorul divizor de clock (numărător pe 4 biți `reg [3:0] q`) este alimentat de un semnal clk de 100 MHz. Potriviți frecvențele rezultate pentru ieșiri:",
    rows: ["clk1 (atribuit lui q[1])", "clk3 (atribuit lui q[3])"],
    options: ["25 MHz", "6.25 MHz", "50 MHz", "12.5 MHz"],
    correct: {
      "clk1 (atribuit lui q[1])": "25 MHz",
      "clk3 (atribuit lui q[3])": "6.25 MHz"
    }
  },

  // ── Q27 ─────────────────────────────────────────────────────
  {
    id: 27,
    type: "checkbox",
    text: "Care dintre următoarele circuite sunt circuite logice programabile simple (SPLD)?",
    options: ["PLA", "SRAM", "PAL", "FPGA", "GAL", "ASIC", "CPLD"],
    correct: ["PLA", "PAL", "GAL"]
  },

  // ── Q28 ─────────────────────────────────────────────────────
  {
    id: 28,
    type: "match-dropdown",
    text: "În cazul simulării pe axa timpului (`timescale 1ns/1ps`), determinați stările semnalului `test` într-un bloc `initial` cu instrucțiuni cumulative secvențiale:",
    rows: [
      "Intervalul de timp în care semnalul test va fi egal cu valoarea 3"
    ],
    options: ["între 15 și 20 ns", "între 5 și 10 ns", "între 10 și 15 ns", "între 20 și 25 ns"],
    correct: {
      "Intervalul de timp în care semnalul test va fi egal cu valoarea 3": "între 15 și 20 ns"
    }
  },

  // ── Q29 ─────────────────────────────────────────────────────
  {
    id: 29,
    type: "checkbox",
    text: "În cazul unui bloc primitiv LUT6 (Look-Up Table) care dintre următoarele afirmații sunt adevărate:",
    options: [
      "De fapt este o memorie de 64x1 biți",
      "Poate implementa orice funcție logică de 4 variabile",
      "De fapt este o memorie de 16x1 biți",
      "Poate implementa orice funcție logică de 16 variabile",
      "Poate implementa orice funcție logică de 6 variabile"
    ],
    correct: [
      "De fapt este o memorie de 64x1 biți",
      "Poate implementa orice funcție logică de 6 variabile"
    ]
  },

  // ── Q30 ─────────────────────────────────────────────────────
  {
    id: 30,
    type: "radio",
    text: "În lista de senzitivități asincrone a unui bloc `always @ (posedge clk, posedge rst, posedge set)`, specificați comportamentul semnalelor:",
    options: [
      "Semnalele 'rst' și 'set' sunt semnale asincrone, dar 'ce' este sincron.",
      "Toate semnalele (clk, rst, set) sunt sincrone deoarece se utilizează într-un bloc always.",
      "Toate semnalele (clk, rst, set) sunt asincrone deoarece se utilizează într-un bloc always.",
      "Semnalele 'rst' și 'set' sunt semnale sincrone, dar 'ce' este asincron."
    ],
    correct: "Semnalele 'rst' și 'set' sunt semnale asincrone, dar 'ce' este sincron."
  },

  // ── Q31 ─────────────────────────────────────────────────────
  {
    id: 31,
    type: "checkbox",
    text: "Care dintre următoarele afirmații sunt corecte în legătură cu microprocesorul de tip arhitectură MicroBlaze?",
    options: [
      "Este un microprocesor pe 8 biți",
      "Este un microprocesor hard-core",
      "Este un microprocesor pe 32 biți",
      "Are 16 registre de uz general",
      "Este un microprocesor de tip soft-core",
      "Are 32 registre de uz general",
      "Este un microprocesor de tip RISC",
      "Are un pipeline pe 5/6 nivele",
      "Are un pipeline pe 3/5 nivele",
      "Este un microprocesor de tip CISC"
    ],
    correct: [
      "Este un microprocesor pe 32 biți",
      "Este un microprocesor de tip soft-core",
      "Este un microprocesor de tip RISC",
      "Are 32 registre de uz general",
      "Are un pipeline pe 3/5 nivele"
    ]
  },

  // ── Q32 ─────────────────────────────────────────────────────
  {
    id: 32,
    type: "checkbox",
    text: "Care dintre afirmațiile următoare este adevărată cu privire la circuitele de tip matrice PLA?",
    options: [
      "Aria AND a circuitului PLA este programabilă, în timp ce aria OR este fixă",
      "Aria OR a circuitului PLA este programabilă, în timp ce aria AND este fixă",
      "Ambele arii ale unui circuit PLA (AND, OR) sunt fixe",
      "Ambele arii ale unui circuit PLA (AND, OR) sunt programabile"
    ],
    correct: [
      "Ambele arii ale unui circuit PLA (AND, OR) sunt programabile"
    ]
  },

  // ── Q33 ─────────────────────────────────────────────────────
  {
    id: 33,
    type: "match-dropdown",
    text: "Determinați specificațiile corecte legate de interpretarea și dimensiunea constantei Verilog `12'o127`:",
    rows: [
      "Valoarea interpretată în sistemul zecimal",
      "Numărul total de biți pe care va fi reprezentat în hardware"
    ],
    options: ["87", "12", "127", "64"],
    correct: {
      "Valoarea interpretată în sistemul zecimal": "87",
      "Numărul total de biți pe care va fi reprezentat în hardware": "12"
    }
  }

];