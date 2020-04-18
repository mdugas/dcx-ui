const LOG_FREQUENCY_SCALE = [
  '20',
  '20.5',
  '21',
  '21.5',
  '22',
  '22.5',
  '23',
  '23.5',
  '24',
  '24.5',
  '25',
  '25.5',
  '26',
  '27',
  '27.5',
  '28',
  '28.5',
  '29',
  '30',
  '30.5',
  '31',
  '32',
  '32.5',
  '33',
  '34',
  '34.5',
  '35',
  '36',
  '37',
  '38',
  '38.5',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '56',
  '57',
  '58',
  '59',
  '61',
  '62',
  '63',
  '65',
  '66',
  '68',
  '69',
  '71',
  '72',
  '74',
  '75',
  '77',
  '79',
  '80',
  '82',
  '84',
  '86',
  '88',
  '90',
  '92',
  '94',
  '96',
  '98',
  '100',
  '102',
  '104',
  '107',
  '109',
  '111',
  '114',
  '116',
  '119',
  '121',
  '124',
  '127',
  '130',
  '132',
  '135',
  '138',
  '141',
  '145',
  '148',
  '151',
  '154',
  '158',
  '161',
  '165',
  '168',
  '172',
  '176',
  '180',
  '184',
  '188',
  '192',
  '196',
  '200',
  '205',
  '209',
  '214',
  '218',
  '223',
  '228',
  '233',
  '238',
  '243',
  '249',
  '254',
  '260',
  '266',
  '271',
  '277',
  '284',
  '290',
  '296',
  '303',
  '309',
  '316',
  '323',
  '330',
  '337',
  '345',
  '352',
  '360',
  '368',
  '376',
  '384',
  '393',
  '401',
  '410',
  '419',
  '428',
  '438',
  '447',
  '457',
  '467',
  '478',
  '488',
  '499',
  '510',
  '521',
  '532',
  '544',
  '556',
  '568',
  '581',
  '594',
  '607',
  '620',
  '634',
  '647',
  '662',
  '676',
  '691',
  '706',
  '722',
  '738',
  '754',
  '770',
  '787',
  '805',
  '822',
  '840',
  '859',
  '878',
  '897',
  '917',
  '937',
  '957',
  '979',
  '1000',
  '1020',
  '1040',
  '1070',
  '1090',
  '1110',
  '1140',
  '1160',
  '1190',
  '1210',
  '1240',
  '1270',
  '1290',
  '1320',
  '1350',
  '1380',
  '1410',
  '1440',
  '1470',
  '1500',
  '1530',
  '1570',
  '1600',
  '1640',
  '1670',
  '1710',
  '1740',
  '1780',
  '1820',
  '1860',
  '1900',
  '1940',
  '1980',
  '2030',
  '2070',
  '2110',
  '2160',
  '2210',
  '2250',
  '2300',
  '2350',
  '2400',
  '2460',
  '2510',
  '2560',
  '2620',
  '2680',
  '2730',
  '2790',
  '2850',
  '2920',
  '2980',
  '3040',
  '3110',
  '3180',
  '3240',
  '3310',
  '3390',
  '3460',
  '3530',
  '3610',
  '3690',
  '3770',
  '3850',
  '3930',
  '4020',
  '4110',
  '4190',
  '4280',
  '4380',
  '4470',
  '4570',
  '4670',
  '4770',
  '4870',
  '4980',
  '5080',
  '5190',
  '5310',
  '5420',
  '5540',
  '5660',
  '5780',
  '5910',
  '6030',
  '6160',
  '6300',
  '6430',
  '6570',
  '6720',
  '6860',
  '7010',
  '7160',
  '7320',
  '7470',
  '7640',
  '7800',
  '7970',
  '8140',
  '8320',
  '8500',
  '8680',
  '8870',
  '9060',
  '9260',
  '9460',
  '9660',
  '9870',
  '10100',
  '10300',
  '10500',
  '10800',
  '11000',
  '11200',
  '11500',
  '11700',
  '12000',
  '12200',
  '12500',
  '12800',
  '13000',
  '13300',
  '13600',
  '13900',
  '14200',
  '14500',
  '14800',
  '15100',
  '15500',
  '15800',
  '16100',
  '16500',
  '16900',
  '17200',
  '17600',
  '18000',
  '18400',
  '18800',
  '19200',
  '19600',
  '20000'
];
const LOG_ZERO_TO_4000_MS = [
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
  '80',
  '81',
  '82',
  '83',
  '84',
  '85',
  '86',
  '87',
  '89',
  '91',
  '93',
  '95',
  '97',
  '99',
  '101',
  '103',
  '105',
  '108',
  '110',
  '112',
  '115',
  '117',
  '119',
  '122',
  '124',
  '127',
  '130',
  '132',
  '135',
  '138',
  '141',
  '144',
  '147',
  '150',
  '153',
  '156',
  '160',
  '163',
  '167',
  '170',
  '174',
  '177',
  '181',
  '185',
  '189',
  '193',
  '197',
  '201',
  '205',
  '209',
  '214',
  '218',
  '223',
  '227',
  '232',
  '237',
  '242',
  '247',
  '252',
  '258',
  '263',
  '269',
  '274',
  '280',
  '286',
  '292',
  '298',
  '304',
  '311',
  '317',
  '324',
  '331',
  '337',
  '345',
  '352',
  '359',
  '367',
  '374',
  '382',
  '390',
  '399',
  '407',
  '415',
  '424',
  '433',
  '442',
  '451',
  '461',
  '471',
  '480',
  '491',
  '501',
  '511',
  '522',
  '533',
  '544',
  '556',
  '567',
  '579',
  '591',
  '604',
  '616',
  '629',
  '643',
  '656',
  '670',
  '684',
  '698',
  '713',
  '728',
  '743',
  '759',
  '775',
  '791',
  '808',
  '825',
  '842',
  '860',
  '878',
  '896',
  '915',
  '934',
  '954',
  '974',
  '994',
  '1015',
  '1036',
  '1058',
  '1080',
  '1103',
  '1126',
  '1150',
  '1174',
  '1199',
  '1224',
  '1249',
  '1276',
  '1303',
  '1330',
  '1358',
  '1386',
  '1415',
  '1445',
  '1475',
  '1506',
  '1538',
  '1570',
  '1603',
  '1637',
  '1671',
  '1706',
  '1742',
  '1779',
  '1816',
  '1854',
  '1893',
  '1933',
  '1974',
  '2015',
  '2057',
  '2101',
  '2145',
  '2190',
  '2236',
  '2283',
  '2330',
  '2379',
  '2429',
  '2480',
  '2532',
  '2586',
  '2640',
  '2695',
  '2752',
  '2810',
  '2869',
  '2929',
  '2990',
  '3053',
  '3117',
  '3183',
  '3250',
  '3318',
  '3387',
  '3459',
  '3531',
  '3605',
  '3681',
  '3758',
  '3837',
  '3918',
  '4000'
];
const OUTPUT_NAMES = [
  'Full-range',
  'Subwoofer',
  'Low',
  'Low-mid',
  'Mid',
  'Hi-mid',
  'Hi',
  'Left Full-range',
  'Left Subwoofer',
  'Left Low',
  'Left Low-mid',
  'Left Mid',
  'Left Hi-mid',
  'Left Hi',
  'Right Full-range',
  'Right Subwoofer',
  'Right Low',
  'Right Low-mid',
  'Right Mid',
  'Right Hi-mid',
  'Right Hi',
  'Center Full-range',
  'Center Subwoofer',
  'Center Low',
  'Center Low-mid',
  'Center Mid',
  'Center Hi-mid',
  'Center Hi'
];
const CROSSOVER_FILTERS = [
  'off',
  'but6',
  'but12',
  'bes12',
  'lr12',
  'but18',
  'but24',
  'bes24',
  'lr24',
  'but48',
  'lr48'
];
const OUTPUT_SOURCES = ['A', 'B', 'C', 'Sum'];
const ATTACK_TIMES = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '70',
  '71',
  '72',
  '74',
  '76',
  '78',
  '81',
  '83',
  '85',
  '87',
  '90',
  '92',
  '95',
  '97',
  '100',
  '103',
  '105',
  '108',
  '111',
  '114',
  '117',
  '120',
  '124',
  '127',
  '131',
  '134',
  '138',
  '141',
  '145',
  '149',
  '153',
  '157',
  '162',
  '166',
  '170',
  '175',
  '180',
  '185',
  '190',
  '195',
  '200'
];
const EQ_RATIOS = [
  '1.1:1',
  '1.2:1',
  '1.4:1',
  '1.6:1',
  '1.8:1',
  '2.0:1',
  '2.5:1',
  '3.0:1',
  '3.5:1',
  '4.0:1',
  '5.0:1',
  '6.0:1',
  '8.0:1',
  '10.0:1',
  '20.0:1',
  'inf:1'
];
const INPUT_SUM_TYPES = ['Off', 'A', 'B', 'C', 'A+B', 'A+C', 'B+C'];
const INPUT_AB_SOURCES = ['Analog', 'AES/EBU'];
const INPUT_C_GAINS = ['Line', 'Mic'];
const OUTPUT_CONFIGS = ['mono', 'lmhlmh', 'llmmhh', 'lhlhlh'];
const STEREO_LINK_MODES = ['Off', 'A+B', 'A+B+C', 'A+B+C+Sum'];
const EQ_Q_VALUES = [
  '0.1',
  '0.125',
  '0.15',
  '0.175',
  '0.2',
  '0.225',
  '0.25',
  '0.275',
  '0.3',
  '0.33',
  '0.36',
  '0.4',
  '0.43',
  '0.46',
  '0.5',
  '0.6',
  '0.65',
  '0.7',
  '0.8',
  '0.9',
  '1.0',
  '1.1',
  '1.3',
  '1.4',
  '1.6',
  '1.8',
  '2.0',
  '2.2',
  '2.5',
  '2.8',
  '3.2',
  '3.5',
  '4.0',
  '4.5',
  '5.0',
  '5.6',
  '6.3',
  '7.1',
  '7.9',
  '8.9',
  '10'
];
const EQ_TYPES = ['Low Shelv', 'Bandpass', 'High Shelv'];
const EQ_SHELVING_SLOPES = ['6dB', '12dB'];
const DELAY_UNITS = ['mm', 'inch'];
const POLARITIES = ['Normal', 'Inverted'];
const INPUTS = ['A', 'B', 'C', 'Sum'];
const OUTPUTS = ['1', '2', '3', '4', '5', '6'];
const CHANNELS = INPUTS.concat(OUTPUTS);
const CHANNEL_LEVELS = [undefined, -40, -30, -20, -10, -5, -2, 0];
const SEARCH_RESPONSE = 0;
const DUMP_RESPONSE = 16;
const COMMAND_BYTE = 6;
const PING_RESPONSE = 4;
const DIRECT_COMMAND = 32;
const ID_BYTE = 4;
const PART_BYTE = 12;
const PART_0 = 0;
const PART_1 = 1;

module.exports = {
  LOG_FREQUENCY_SCALE,
  LOG_ZERO_TO_4000_MS,
  OUTPUT_NAMES,
  CROSSOVER_FILTERS,
  OUTPUT_SOURCES,
  INPUT_AB_SOURCES,
  ATTACK_TIMES,
  EQ_RATIOS,
  INPUT_SUM_TYPES,
  INPUT_C_GAINS,
  OUTPUT_CONFIGS,
  STEREO_LINK_MODES,
  EQ_Q_VALUES,
  EQ_TYPES,
  EQ_SHELVING_SLOPES,
  DELAY_UNITS,
  POLARITIES,
  INPUTS,
  OUTPUTS,
  CHANNELS,
  CHANNEL_LEVELS,
  SEARCH_RESPONSE,
  DUMP_RESPONSE,
  COMMAND_BYTE,
  PING_RESPONSE,
  DIRECT_COMMAND,
  ID_BYTE,
  PART_BYTE,
  PART_0,
  PART_1
};
