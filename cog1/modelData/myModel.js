/**
 * Ein Modell im Rahmen einer Kirche
 *
 * @namespace cog1.data
 * @module empty
 */
 define(["exports", "data"], function (exports, data) {
    "use strict";

    /**
     * Create an instance of the model defined in this module.
     *
     * @parameter object with fields:
     * @returns instance of this model.
     */
    exports.create = function (parameter) {
      if (parameter) {
        var scale = parameter.scale;
        var textureURL = parameter.textureURL;
        // Each face shows a different area of the given texture (e.g, a dice).
        var sixFacesTexture = parameter.sixFacesTexture;
      }
      // Set default values if parameter is undefined.
      if (scale == undefined) {
        scale = 200;
      }
      if (textureURL == undefined) {
        textureURL = "";
      }
      if (sixFacesTexture == undefined) {
        sixFacesTexture = false;
      }

      // Instance of the model to be returned.
      var instance = {};

      // x, y, z
      instance.vertices = [
        // #1 Boden
        [-6, -6, 0], // 0
        [6, -6, 0], // 1
        [6, -6, 8], // 2
        [-6, -6, 8], // 3

        // #2 Seite rechts
        [-6, -6, 0], // 4
        [6, -6, 0], // 5
        [6, 2, 0], // 6
        [-6, 2, 0], // 7

        // #3 Fenster rechts
        [-1, -3, 0], // 12
        [1, -3, 0], // 13
        [1, 1, 0], // 14
        [-1, 1, 0], // 15

        // #4 Seite links
        [-6, -6, 8], // 8
        [6, -6, 8], // 9
        [6, 2, 8], // 10
        [-6, 2, 8], // 11

        // // #5 Fenster links
        [-1, -3, 8], // 12
        [1, -3, 8], // 13
        [1, 1, 8], // 14
        [-1, 1, 8], // 15

        // // #6 Frontseite
        [6, -6, 0], // 16
        [6, -6, 8], // 17
        [6, 2, 8], // 18
        [6, 2, 0], // 19

        // // #7 Fronttür
        [6, -6, 2], // 20
        [6, -6, 6], // 21
        [6, 0, 6], // 22
        [6, 0, 2], // 23

        // # 8 Türklinke I
        [6, -3, 5], // 24
        [6, -3, 6], // 25
        //#9 Türklinke II
        [6, -3, 5], //26
        [6, -4, 5], //27

        // // #10 Frontseite
        [-6, -6, 0], // 16
        [-6, -6, 8], // 17
        [-6, 2, 8], // 18
        [-6, 2, 0], // 19

        // // #11 Dach links
        [-6, 2, 8], // 28
        [6, 2, 8], // 29
        [6, 4, 6], // 30
        [-6, 4, 6], // 31

        // // #12 Dach rechts
        [-6, 2, 0], // 32
        [6, 2, 0], // 33
        [6, 4, 2], // 34
        [-6, 4, 2], // 35

        // #13 Dach Platte
        [-6, 4, 2], // 36
        [-6, 4, 6], // 37
        [6, 4, 6], // 38
        [6, 4, 2], // 39

        // #14 Türmchen hinten
        [4, 4, 3], // 40
        [4, 4, 5], // 41
        [4, 6, 5], // 42
        [4, 6, 3], // 43

        // // #15 Türmchen links
        [6, 4, 3], // 44
        [4, 4, 3], // 45
        [4, 6, 3], // 46
        [6, 6, 3], // 47

        // // #16 Türmchen vorne
        [6, 4, 3], // 48
        [6, 4, 5], //49
        [6, 6, 5], //50
        [6, 6, 3], //51

        // // #17 Türmchen rechts
        [6, 4, 5], // 52
        [4, 4, 5], // 53
        [4, 6, 5], // 54
        [6, 6, 5], // 55

        // // #18 Türmchen Dach rechts
        [6, 6, 3], // 56
        [4, 6, 3], // 57
        [5, 8, 4], // 58

        // // // #19 Türmchen Dach links
        [6, 6, 5], // 59
        [4, 6, 5], // 60
        [5, 8, 4], // 61

        // // #20 Türmchen Dach hinten
        [4, 6, 3], // 62
        [4, 6, 5], // 63
        [5, 8, 4], // 64

        // // #21 Türmchen Dach vorne
        [6, 6, 3], // 65
        [6, 6, 5], // 66
        [5, 8, 4], // 67

        // großer Turm

        // // #22 Turm groß hinten
        [-6, 9, 3], // 68
        [-6, 9, 5], // 69
        [-6, 4, 5], // 70
        [-6, 4, 3], // 71

        // // #23 Turm groß links
        [-6, 9, 3], // 72
        [-4, 9, 3], // 73
        [-4, 4, 3], // 74
        [-6, 4, 3], // 75

        // // #24 Turm groß vorne
        [-4, 4, 3], // 76
        [-4, 4, 5], //77
        [-4, 9, 5], //78
        [-4, 9, 3], //79

        // // #25 Turm groß rechts
        [-6, 4, 5], // 80
        [-4, 4, 5], // 81
        [-4, 9, 5], // 82
        [-6, 9, 5], // 83

        // // #26 Turm groß Dach rechts
        [-6, 9, 3], // 84
        [-4, 9, 3], // 85
        [-5, 11, 4], // 86

        // // #27 Turm groß Dach links
        [-6, 9, 5], // 87
        [-4, 9, 5], // 88
        [-5, 11, 4], // 89

        // // #28 Turm groß Dach hinten
        [-4, 9, 3], // 90
        [-4, 9, 5], // 91
        [-5, 11, 4], // 92

        // // #29 Turm groß Dach vorne
        [-6, 9, 3], // 93
        [-6, 9, 5], // 94
        [-5, 11, 4], // 95

        // // #30 Fenster hinten
        [-6, -3, 3], // 96
        [-6, -3, 5], // 97
        [-6, 1, 5], // 98
        [-6, 1, 3], // 99
      ];

      instance.polygonVertices = [
        [0, 1, 2, 3], // #1 Boden

        [4, 5, 6, 7], // #2 Seite rechts
        [8, 9, 10, 11], // #3 Fenster rechts
        [12, 13, 14, 15], // #4 Seite links
        [16, 17, 18, 19], // #5 Fenster links

        [20, 21, 22, 23], // #6 Frontseite
        [24, 25, 26, 27], // #7 Eingangstür
        [28, 29], // #8 Türklinke I
        [30, 31], // #9 Türklinke II
        [32, 33, 34, 35], // #10 Hinterseite
        [36, 37, 38, 39], // #11 Dach links

        [40, 41, 42, 43], // #12 Dach rechts
        [44, 45, 46, 47], // #13 Dachplatte
        //kleiner Turm
        [48, 49, 50, 51], // #14 Türmchen hinten
        [52, 53, 54, 55], // #15 Türmchen links

        [56, 57, 58, 59], // #16 Türmchen vorne
        [60, 61, 62, 63], // #17 Türmchen rechts
        [64, 65, 66], //   #18 Türmchen Dach rechts
        [67, 68, 69], // #19 Türmchen Dach links
        [70, 71, 72], // #20 Türmchen Dach hinten
        [73, 74, 75], // #21 Türmchen Dach vorne
        //großer Turm
        [76, 77, 78, 79], // #22 Türmchen hinten
        [80, 81, 82, 83], // #32 Türmchen links

        [84, 85, 86, 87], // #24 Türmchen vorne
        [88, 89, 90, 91], // #25 Türmchen rechts
        [92, 93, 94], //   #26 Türmchen Dach rechts
        [95, 96, 97], // #27 Türmchen Dach links
        [98, 99, 100], // #28 Türmchen Dach hinten
        [101, 102, 103], // #29 Türmchen Dach vorne
        [104, 105, 106, 107], // #30 Fenster hinten
      ];


      instance.polygonColors = [
        9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
        9, 9, 9, 9, 9,
      ];

      data.applyScale.call(instance, scale);

      return instance;
    };
  });
