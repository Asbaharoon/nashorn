/*
 * Copyright (c) 2015, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 * 
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 * 
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 * 
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 * 
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */

/**
 * JDK-8078049: Nashorn crashes when attempting to start the new tsc.js compiler for TypeScript
 *
 * @test
 * @run
 * @fork
 * @option -Dnashorn.debug=true
 */

var m = 1;

var fields = {
    p0: { code: 0, category: m },
    p1: { code: 1, category: m },
    p2: { code: 2, category: m }
};

var spill = {
    p0: { code: 0, category: m },
    p1: { code: 1, category: m },
    p2: { code: 2, category: m },
    p3: { code: 3, category: m },
    p4: { code: 4, category: m },
    p5: { code: 5, category: m },
    p6: { code: 6, category: m },
    p7: { code: 7, category: m },
    p8: { code: 8, category: m },
    p9: { code: 9, category: m },
    p10: { code: 10, category: m },
    p11: { code: 11, category: m },
    p12: { code: 12, category: m },
    p13: { code: 13, category: m },
    p14: { code: 14, category: m },
    p15: { code: 15, category: m },
    p16: { code: 16, category: m },
    p17: { code: 17, category: m },
    p18: { code: 18, category: m },
    p19: { code: 19, category: m },
    p20: { code: 20, category: m },
    p21: { code: 21, category: m },
    p22: { code: 22, category: m },
    p23: { code: 23, category: m },
    p24: { code: 24, category: m },
    p25: { code: 25, category: m },
    p26: { code: 26, category: m },
    p27: { code: 27, category: m },
    p28: { code: 28, category: m },
    p29: { code: 29, category: m },
    p30: { code: 30, category: m },
    p31: { code: 31, category: m },
    p32: { code: 32, category: m },
    p33: { code: 33, category: m },
    p34: { code: 34, category: m },
    p35: { code: 35, category: m },
    p36: { code: 36, category: m },
    p37: { code: 37, category: m },
    p38: { code: 38, category: m },
    p39: { code: 39, category: m },
    p40: { code: 40, category: m },
    p41: { code: 41, category: m },
    p42: { code: 42, category: m },
    p43: { code: 43, category: m },
    p44: { code: 44, category: m },
    p45: { code: 45, category: m },
    p46: { code: 46, category: m },
    p47: { code: 47, category: m },
    p48: { code: 48, category: m },
    p49: { code: 49, category: m },
    p50: { code: 50, category: m },
    p51: { code: 51, category: m },
    p52: { code: 52, category: m },
    p53: { code: 53, category: m },
    p54: { code: 54, category: m },
    p55: { code: 55, category: m },
    p56: { code: 56, category: m },
    p57: { code: 57, category: m },
    p58: { code: 58, category: m },
    p59: { code: 59, category: m },
    p60: { code: 60, category: m },
    p61: { code: 61, category: m },
    p62: { code: 62, category: m },
    p63: { code: 63, category: m },
    p64: { code: 64, category: m },
    p65: { code: 65, category: m },
    p66: { code: 66, category: m },
    p67: { code: 67, category: m },
    p68: { code: 68, category: m },
    p69: { code: 69, category: m },
    p70: { code: 70, category: m },
    p71: { code: 71, category: m },
    p72: { code: 72, category: m },
    p73: { code: 73, category: m },
    p74: { code: 74, category: m },
    p75: { code: 75, category: m },
    p76: { code: 76, category: m },
    p77: { code: 77, category: m },
    p78: { code: 78, category: m },
    p79: { code: 79, category: m },
    p80: { code: 80, category: m },
    p81: { code: 81, category: m },
    p82: { code: 82, category: m },
    p83: { code: 83, category: m },
    p84: { code: 84, category: m },
    p85: { code: 85, category: m },
    p86: { code: 86, category: m },
    p87: { code: 87, category: m },
    p88: { code: 88, category: m },
    p89: { code: 89, category: m },
    p90: { code: 90, category: m },
    p91: { code: 91, category: m },
    p92: { code: 92, category: m },
    p93: { code: 93, category: m },
    p94: { code: 94, category: m },
    p95: { code: 95, category: m },
    p96: { code: 96, category: m },
    p97: { code: 97, category: m },
    p98: { code: 98, category: m },
    p99: { code: 99, category: m },
    p100: { code: 100, category: m },
    p101: { code: 101, category: m },
    p102: { code: 102, category: m },
    p103: { code: 103, category: m },
    p104: { code: 104, category: m },
    p105: { code: 105, category: m },
    p106: { code: 106, category: m },
    p107: { code: 107, category: m },
    p108: { code: 108, category: m },
    p109: { code: 109, category: m },
    p110: { code: 110, category: m },
    p111: { code: 111, category: m },
    p112: { code: 112, category: m },
    p113: { code: 113, category: m },
    p114: { code: 114, category: m },
    p115: { code: 115, category: m },
    p116: { code: 116, category: m },
    p117: { code: 117, category: m },
    p118: { code: 118, category: m },
    p119: { code: 119, category: m },
    p120: { code: 120, category: m },
    p121: { code: 121, category: m },
    p122: { code: 122, category: m },
    p123: { code: 123, category: m },
    p124: { code: 124, category: m },
    p125: { code: 125, category: m },
    p126: { code: 126, category: m },
    p127: { code: 127, category: m },
    p128: { code: 128, category: m },
    p129: { code: 129, category: m },
    p130: { code: 130, category: m },
    p131: { code: 131, category: m },
    p132: { code: 132, category: m },
    p133: { code: 133, category: m },
    p134: { code: 134, category: m },
    p135: { code: 135, category: m },
    p136: { code: 136, category: m },
    p137: { code: 137, category: m },
    p138: { code: 138, category: m },
    p139: { code: 139, category: m },
    p140: { code: 140, category: m },
    p141: { code: 141, category: m },
    p142: { code: 142, category: m },
    p143: { code: 143, category: m },
    p144: { code: 144, category: m },
    p145: { code: 145, category: m },
    p146: { code: 146, category: m },
    p147: { code: 147, category: m },
    p148: { code: 148, category: m },
    p149: { code: 149, category: m },
    p150: { code: 150, category: m },
    p151: { code: 151, category: m },
    p152: { code: 152, category: m },
    p153: { code: 153, category: m },
    p154: { code: 154, category: m },
    p155: { code: 155, category: m },
    p156: { code: 156, category: m },
    p157: { code: 157, category: m },
    p158: { code: 158, category: m },
    p159: { code: 159, category: m },
    p160: { code: 160, category: m },
    p161: { code: 161, category: m },
    p162: { code: 162, category: m },
    p163: { code: 163, category: m },
    p164: { code: 164, category: m },
    p165: { code: 165, category: m },
    p166: { code: 166, category: m },
    p167: { code: 167, category: m },
    p168: { code: 168, category: m },
    p169: { code: 169, category: m },
    p170: { code: 170, category: m },
    p171: { code: 171, category: m },
    p172: { code: 172, category: m },
    p173: { code: 173, category: m },
    p174: { code: 174, category: m },
    p175: { code: 175, category: m },
    p176: { code: 176, category: m },
    p177: { code: 177, category: m },
    p178: { code: 178, category: m },
    p179: { code: 179, category: m },
    p180: { code: 180, category: m },
    p181: { code: 181, category: m },
    p182: { code: 182, category: m },
    p183: { code: 183, category: m },
    p184: { code: 184, category: m },
    p185: { code: 185, category: m },
    p186: { code: 186, category: m },
    p187: { code: 187, category: m },
    p188: { code: 188, category: m },
    p189: { code: 189, category: m },
    p190: { code: 190, category: m },
    p191: { code: 191, category: m },
    p192: { code: 192, category: m },
    p193: { code: 193, category: m },
    p194: { code: 194, category: m },
    p195: { code: 195, category: m },
    p196: { code: 196, category: m },
    p197: { code: 197, category: m },
    p198: { code: 198, category: m },
    p199: { code: 199, category: m },
    p200: { code: 200, category: m },
    p201: { code: 201, category: m },
    p202: { code: 202, category: m },
    p203: { code: 203, category: m },
    p204: { code: 204, category: m },
    p205: { code: 205, category: m },
    p206: { code: 206, category: m },
    p207: { code: 207, category: m },
    p208: { code: 208, category: m },
    p209: { code: 209, category: m },
    p210: { code: 210, category: m },
    p211: { code: 211, category: m },
    p212: { code: 212, category: m },
    p213: { code: 213, category: m },
    p214: { code: 214, category: m },
    p215: { code: 215, category: m },
    p216: { code: 216, category: m },
    p217: { code: 217, category: m },
    p218: { code: 218, category: m },
    p219: { code: 219, category: m },
    p220: { code: 220, category: m },
    p221: { code: 221, category: m },
    p222: { code: 222, category: m },
    p223: { code: 223, category: m },
    p224: { code: 224, category: m },
    p225: { code: 225, category: m },
    p226: { code: 226, category: m },
    p227: { code: 227, category: m },
    p228: { code: 228, category: m },
    p229: { code: 229, category: m },
    p230: { code: 230, category: m },
    p231: { code: 231, category: m },
    p232: { code: 232, category: m },
    p233: { code: 233, category: m },
    p234: { code: 234, category: m },
    p235: { code: 235, category: m },
    p236: { code: 236, category: m },
    p237: { code: 237, category: m },
    p238: { code: 238, category: m },
    p239: { code: 239, category: m },
    p240: { code: 240, category: m },
    p241: { code: 241, category: m },
    p242: { code: 242, category: m },
    p243: { code: 243, category: m },
    p244: { code: 244, category: m },
    p245: { code: 245, category: m },
    p246: { code: 246, category: m },
    p247: { code: 247, category: m },
    p248: { code: 248, category: m },
    p249: { code: 249, category: m },
    p250: { code: 250, category: m },
    p251: { code: 251, category: m },
    p252: { code: 252, category: m },
    p253: { code: 253, category: m },
    p254: { code: 254, category: m },
    p255: { code: 255, category: m },
    p256: { code: 256, category: m },
    p257: { code: 257, category: m },
    p258: { code: 258, category: m },
    p259: { code: 259, category: m },
    p260: { code: 260, category: m },
    p261: { code: 261, category: m },
    p262: { code: 262, category: m },
    p263: { code: 263, category: m },
    p264: { code: 264, category: m },
    p265: { code: 265, category: m },
    p266: { code: 266, category: m },
    p267: { code: 267, category: m },
    p268: { code: 268, category: m },
    p269: { code: 269, category: m },
    p270: { code: 270, category: m },
    p271: { code: 271, category: m },
    p272: { code: 272, category: m },
    p273: { code: 273, category: m },
    p274: { code: 274, category: m },
    p275: { code: 275, category: m },
    p276: { code: 276, category: m },
    p277: { code: 277, category: m },
    p278: { code: 278, category: m },
    p279: { code: 279, category: m },
    p280: { code: 280, category: m },
    p281: { code: 281, category: m },
    p282: { code: 282, category: m },
    p283: { code: 283, category: m },
    p284: { code: 284, category: m },
    p285: { code: 285, category: m },
    p286: { code: 286, category: m },
    p287: { code: 287, category: m },
    p288: { code: 288, category: m },
    p289: { code: 289, category: m },
    p290: { code: 290, category: m },
    p291: { code: 291, category: m },
    p292: { code: 292, category: m },
    p293: { code: 293, category: m },
    p294: { code: 294, category: m },
    p295: { code: 295, category: m },
    p296: { code: 296, category: m },
    p297: { code: 297, category: m },
    p298: { code: 298, category: m },
    p299: { code: 299, category: m },
    p300: { code: 300, category: m },
    p301: { code: 301, category: m },
    p302: { code: 302, category: m },
    p303: { code: 303, category: m },
    p304: { code: 304, category: m },
    p305: { code: 305, category: m },
    p306: { code: 306, category: m },
    p307: { code: 307, category: m },
    p308: { code: 308, category: m },
    p309: { code: 309, category: m },
    p310: { code: 310, category: m },
    p311: { code: 311, category: m },
    p312: { code: 312, category: m },
    p313: { code: 313, category: m },
    p314: { code: 314, category: m },
    p315: { code: 315, category: m },
    p316: { code: 316, category: m },
    p317: { code: 317, category: m },
    p318: { code: 318, category: m },
    p319: { code: 319, category: m },
    p320: { code: 320, category: m },
    p321: { code: 321, category: m },
    p322: { code: 322, category: m },
    p323: { code: 323, category: m },
    p324: { code: 324, category: m },
    p325: { code: 325, category: m },
    p326: { code: 326, category: m },
    p327: { code: 327, category: m },
    p328: { code: 328, category: m },
    p329: { code: 329, category: m },
    p330: { code: 330, category: m },
    p331: { code: 331, category: m },
    p332: { code: 332, category: m },
    p333: { code: 333, category: m },
    p334: { code: 334, category: m },
    p335: { code: 335, category: m },
    p336: { code: 336, category: m },
    p337: { code: 337, category: m },
    p338: { code: 338, category: m },
    p339: { code: 339, category: m },
    p340: { code: 340, category: m },
    p341: { code: 341, category: m },
    p342: { code: 342, category: m },
    p343: { code: 343, category: m },
    p344: { code: 344, category: m },
    p345: { code: 345, category: m },
    p346: { code: 346, category: m },
    p347: { code: 347, category: m },
    p348: { code: 348, category: m },
    p349: { code: 349, category: m },
    p350: { code: 350, category: m },
    p351: { code: 351, category: m },
    p352: { code: 352, category: m },
    p353: { code: 353, category: m },
    p354: { code: 354, category: m },
    p355: { code: 355, category: m },
    p356: { code: 356, category: m },
    p357: { code: 357, category: m },
    p358: { code: 358, category: m },
    p359: { code: 359, category: m },
    p360: { code: 360, category: m },
    p361: { code: 361, category: m },
    p362: { code: 362, category: m },
    p363: { code: 363, category: m },
    p364: { code: 364, category: m },
    p365: { code: 365, category: m },
    p366: { code: 366, category: m },
    p367: { code: 367, category: m },
    p368: { code: 368, category: m },
    p369: { code: 369, category: m },
    p370: { code: 370, category: m },
    p371: { code: 371, category: m },
    p372: { code: 372, category: m },
    p373: { code: 373, category: m },
    p374: { code: 374, category: m },
    p375: { code: 375, category: m },
    p376: { code: 376, category: m },
    p377: { code: 377, category: m },
    p378: { code: 378, category: m },
    p379: { code: 379, category: m },
    p380: { code: 380, category: m },
    p381: { code: 381, category: m },
    p382: { code: 382, category: m },
    p383: { code: 383, category: m },
    p384: { code: 384, category: m },
    p385: { code: 385, category: m },
    p386: { code: 386, category: m },
    p387: { code: 387, category: m },
    p388: { code: 388, category: m },
    p389: { code: 389, category: m },
    p390: { code: 390, category: m },
    p391: { code: 391, category: m },
    p392: { code: 392, category: m },
    p393: { code: 393, category: m },
    p394: { code: 394, category: m },
    p395: { code: 395, category: m },
    p396: { code: 396, category: m },
    p397: { code: 397, category: m },
    p398: { code: 398, category: m },
    p399: { code: 399, category: m },
    p400: { code: 400, category: m },
    p401: { code: 401, category: m },
    p402: { code: 402, category: m },
    p403: { code: 403, category: m },
    p404: { code: 404, category: m },
    p405: { code: 405, category: m },
    p406: { code: 406, category: m },
    p407: { code: 407, category: m },
    p408: { code: 408, category: m },
    p409: { code: 409, category: m },
    p410: { code: 410, category: m },
    p411: { code: 411, category: m },
    p412: { code: 412, category: m },
    p413: { code: 413, category: m },
    p414: { code: 414, category: m },
    p415: { code: 415, category: m },
    p416: { code: 416, category: m },
    p417: { code: 417, category: m },
    p418: { code: 418, category: m },
    p419: { code: 419, category: m },
    p420: { code: 420, category: m },
    p421: { code: 421, category: m },
    p422: { code: 422, category: m },
    p423: { code: 423, category: m },
    p424: { code: 424, category: m },
    p425: { code: 425, category: m },
    p426: { code: 426, category: m },
    p427: { code: 427, category: m },
    p428: { code: 428, category: m },
    p429: { code: 429, category: m },
    p430: { code: 430, category: m },
    p431: { code: 431, category: m },
    p432: { code: 432, category: m },
    p433: { code: 433, category: m },
    p434: { code: 434, category: m },
    p435: { code: 435, category: m },
    p436: { code: 436, category: m },
    p437: { code: 437, category: m },
    p438: { code: 438, category: m },
    p439: { code: 439, category: m },
    p440: { code: 440, category: m },
    p441: { code: 441, category: m },
    p442: { code: 442, category: m },
    p443: { code: 443, category: m },
    p444: { code: 444, category: m },
    p445: { code: 445, category: m },
    p446: { code: 446, category: m },
    p447: { code: 447, category: m },
    p448: { code: 448, category: m },
    p449: { code: 449, category: m },
    p450: { code: 450, category: m },
    p451: { code: 451, category: m },
    p452: { code: 452, category: m },
    p453: { code: 453, category: m },
    p454: { code: 454, category: m },
    p455: { code: 455, category: m },
    p456: { code: 456, category: m },
    p457: { code: 457, category: m },
    p458: { code: 458, category: m },
    p459: { code: 459, category: m },
    p460: { code: 460, category: m },
    p461: { code: 461, category: m },
    p462: { code: 462, category: m },
    p463: { code: 463, category: m },
    p464: { code: 464, category: m },
    p465: { code: 465, category: m },
    p466: { code: 466, category: m },
    p467: { code: 467, category: m },
    p468: { code: 468, category: m },
    p469: { code: 469, category: m },
    p470: { code: 470, category: m },
    p471: { code: 471, category: m },
    p472: { code: 472, category: m },
    p473: { code: 473, category: m },
    p474: { code: 474, category: m },
    p475: { code: 475, category: m },
    p476: { code: 476, category: m },
    p477: { code: 477, category: m },
    p478: { code: 478, category: m },
    p479: { code: 479, category: m },
    p480: { code: 480, category: m },
    p481: { code: 481, category: m },
    p482: { code: 482, category: m },
    p483: { code: 483, category: m },
    p484: { code: 484, category: m },
    p485: { code: 485, category: m },
    p486: { code: 486, category: m },
    p487: { code: 487, category: m },
    p488: { code: 488, category: m },
    p489: { code: 489, category: m },
    p490: { code: 490, category: m },
    p491: { code: 491, category: m },
    p492: { code: 492, category: m },
    p493: { code: 493, category: m },
    p494: { code: 494, category: m },
    p495: { code: 495, category: m },
    p496: { code: 496, category: m },
    p497: { code: 497, category: m },
    p498: { code: 498, category: m },
    p499: { code: 499, category: m }
};

var AccessorProperty = Java.type("org.openjdk.nashorn.internal.runtime.AccessorProperty");
var SpillProperty    = Java.type("org.openjdk.nashorn.internal.runtime.SpillProperty");
var PropertyMap = Java.type("org.openjdk.nashorn.internal.runtime.PropertyMap");
var findPropertyMethod = PropertyMap.class.getMethod("findProperty", java.lang.Object.class);

Assert.assertTrue(Object.keys(fields).length === 3);
Assert.assertTrue(findPropertyMethod.invoke(Debug.map(fields), "p0").getClass() === AccessorProperty.class);
Assert.assertTrue(findPropertyMethod.invoke(Debug.map(fields), "p2").getClass() === AccessorProperty.class);

Assert.assertTrue(Object.keys(spill).length === 500);

Assert.assertTrue(findPropertyMethod.invoke(Debug.map(spill), "p0").getClass() === SpillProperty.class);
Assert.assertTrue(findPropertyMethod.invoke(Debug.map(spill), "p499").getClass() === SpillProperty.class);
