         function stringToMatrix(str, rows, columns) {
          // 创建二维矩阵，将字�?�串�??的字符填入矩阵中
          let matrix = new Array(rows);
          let index = 0;
          for (let i = 0; i < rows; i++) {
            matrix[i] = new Array(columns).fill(' ');
            for (let j = 0; j < columns; j++) {
              matrix[i][j] = str.charAt(index++);
            }
          }
          return matrix;
        }
                                //提取字�?�串�?为数字的元素
function extractNumbers(str) {
    var result = "";
    var numStart = -1;
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        if (numStart === -1) {
          numStart = i;
        }
      } else {
        if (numStart !== -1) {
          result += str.substring(numStart, i);
          numStart = -1;
        }
      }
    }
    if (numStart !== -1) {
      result += str.substring(numStart);
    }
    return result;
  }
                                         //�?化为矩阵
  function convertToMatrix(str) {
    var rows = str.split("\n");
    var matrix = [];
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var cols = row.split("");
      matrix.push(cols);
    }
    return matrix;
  }
                                               //字�?�串比较
  function compareStrings(str1, str2) {
    var matrix1 = convertToMatrix(str1);
    var matrix2 = convertToMatrix(str2);
  
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
      console.log("两个矩阵的大小不同�?");
      return [];
    }
  
    var differentPositions = [];
  
    for (var i = 0; i < matrix1.length; i++) {
      for (var j = 0; j < matrix1[0].length; j++) {
        if (matrix1[i][j] !== matrix2[i][j]) {
          differentPositions.push([i, j]);
        }
      }
    }
  
    return differentPositions;
  }
  
                                  //矩阵�?化为字�?�串
  
          function convertToString(matrix) {
            var str = "";
            for (var i = 0; i < matrix.length; i++) {
              for (var j = 0; j < matrix[0].length; j++) {
                str += matrix[i][j];
              }
            }
            return str;
          }
  

                                     //矩阵相乘�?2
  function multiplyMod2(matrix1, matrix2) {  //二维数组相乘且mod2
    const numRows1 = matrix1.length;
    const numCols1 = matrix1[0].length;
    const numRows2 = matrix2.length;
    const numCols2 = matrix2[0].length;
  
    if (numCols1 !== numRows2) {
      throw new Error('Matrix dimensions are not compatible for multiplication');
    }
  
    const result = new Array(numRows1);
    for (let i = 0; i < numRows1; i++) {
      result[i] = new Array(numCols2);
      for (let j = 0; j < numCols2; j++) {
        let sum = 0;
        for (let k = 0; k < numCols1; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum % 2;
      }
    }
    return result;
  }
                    
                                         //矩阵相乘
        function matrixMultiply(A, B) {
          // 获取矩阵A和B的�?�列�??
          let m = A.length;
          let n = B[0].length;
  
          // 创建结果矩阵C，大小为m x n，初始值为0
          let C = new Array(m);
          for (let i = 0; i < m; i++) {
            C[i] = new Array(n).fill(0);
          }
  
          // 对结果矩阵中的每�??元素进�?��?�算
          for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
              for (let k = 0; k < B.length; k++) {
                C[i][j] += A[i][k] * B[k][j];
              }
            }
          }
  
          return C;
        }
                                 //�?�?
        function transpose(t_matrix) {
          let tra_result = new Array(t_matrix[0].length).fill(0).map(arr => new Array(t_matrix.length).fill(0));
          for (let i = 0; i < t_matrix.length; i++) {
            for (let j = 0; j < t_matrix[0].length; j++) {
              tra_result[j][i] = t_matrix[i][j];
            }
          }
          return tra_result;
        }
  
        function generateMatrixWithErrors(g_matrix, errorRate) {
          let rows = g_matrix.length;
          let columns = g_matrix[0].length;
  
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
              if (Math.random() < errorRate) { // errorRate的�?�率使元素发生随机错�??
                g_matrix[i][j] = 1 - matrix[i][j]; // 随机�??0变成1，将1变成0
              }
            }
          }
  
  
  
          return g_matrix;
        }
  
                                                         // 模拟bsc 加错
          function simulateChannel(matrix_error, errorRate) {
            // 遍历二维数组的每�??元素
            for (let i = 0; i < matrix_error.length; i++) {
              for (let j = 0; j < matrix_error[i].length; j++) {
                // 生成随机数，如果小于错�??率则将元素更改为 0 �?? 1
                if (Math.random() < errorRate) {
                  matrix_error[i][j] = Math.floor(Math.random() * 2);
                }
              }
            }
            return matrix_error;
          }
                                       //求余
        function mod2(matrix) { 
          let rows = matrix.length;
          let columns = matrix[0].length;
          let result = new Array(rows);
          for (let i = 0; i < rows; i++) {
            result[i] = new Array(columns);
            for (let j = 0; j < columns; j++) {
              result[i][j] = matrix[i][j] % 2;
            }
          }
          return result;
        }
  
          // let G = [
          //           [1, 1, 0, 1, 0, 0, 0],
          //           [0, 1, 1, 0, 1, 0, 0],
          //           [1, 1, 1, 0, 0, 1, 0],
          //           [1, 0, 1, 0, 0, 0, 1]
          //         ];  
  
  
          // let H = [
          //             [1,0,0,1,0,1,1],
          //             [0,1,0,1,1,1,0],
          //             [0,0,1,0,1,1,1]
          //         ];
  
  
  
          function syndtable(H) {
              const n = H[0].length; // 编码后的消息长度
              const k = n - H.length; // 编码前的消息长度
              const p = H.length; // 校验位的数量
  
              // 生成所有可能的错�??向量
              const errors = [];
              for (let i = 0; i < n; i++) {
              const error = new Array(n).fill(0);
              error[i] = 1;
              errors.push(error);
              }
  
              // 生成所有可能的综合�??
              const syndromes = [];
              for (let e of errors) {
              const syndrome = new Array(p).fill(0);
              for (let i = 0; i < p; i++) {
              syndrome[i] = e.reduce((sum, x, j) => sum + x * H[i][j], 0) % 2;
              }
              syndromes.push(syndrome);
              }
  
              // 生成校验位矩阵的综合�??
              const table = new Array(2 ** p).fill(null);
              for (let i = 0; i < syndromes.length; i++) {
              const syndrome = syndromes[i];
              const code = Bin2int(syndrome);
              if (table[code] === null) {
              table[code] = errors[i];
              }
              }
  
              return table;
              }
  
  
          function Bin2int(mat) {
              return parseInt(mat.join(''), 2);
              }
  
 
  
  let table = [13, 7, 14, 11, 8, 4, 2, 1];

  let G = [
    [1, 0, 0, 0, 1, 1, 0 ,1],
    [0, 1, 0, 0, 0, 1, 1 ,1],
    [0, 0, 1, 0, 1, 1, 1 ,0],
    [0, 0, 0, 1, 1, 0, 1 ,1]
  ];


let H = [
      [1,0,1,1,1,0,0,0],
      [1,1,1,0,0,1,0,0],
      [0,1,1,1,0,0,1,0],
      [1,1,0,1,0,0,0,1]
  ];





    function transpose1(matrix) {
      const rows = matrix.length;
      const cols = matrix[0].length;
      const result = [];

      for (let j = 0; j < cols; j++) {
        const row = [];
        for (let i = 0; i < rows; i++) {
          row.push(matrix[i][j]);
        }
        result.push(row);
      }

      return result;
    }




    // 计算两个矩阵的乘积
    function multiplyMatrix(a, b) {
      let result = new Array(a.length);
      for (let i = 0; i < a.length; i++) {
        result[i] = new Array(b[0].length);
        for (let j = 0; j < b[0].length; j++) {
          let sum = 0;
          for (let k = 0; k < a[0].length; k++) {
            sum += a[i][k] * b[k][j];
          }
          result[i][j] = sum;
        }
      }
      return result;
    }

    // 计算矩阵的转置
    function transposeMatrix(matrix) {
      let result = new Array(matrix[0].length);
      for (let i = 0; i < matrix[0].length; i++) {
        result[i] = new Array(matrix.length);
        for (let j = 0; j < matrix.length; j++) {
          result[i][j] = matrix[j][i];
        }
      }
      return result;
    }

    // 将一个二进制数组转换为一个十进制数
    function binaryToDecimal(binaryArray) {
      let decimal = 0;
      for (let i = 0; i < binaryArray.length; i++) {
        decimal += binaryArray[binaryArray.length - 1 - i] * Math.pow(2, i);
      }
      return decimal;
    }

//function Hdecode(rec, H, table) {
//  let syndrome = computeSyndrome(rec, H);
//  let Dsynd = parseInt(syndrome.join(''), 2);
//  let Error_exist, Correctable, Error_site;
//  if (Dsynd == 0) {
//    Error_exist = 0;
//    Correctable = 0;
//    Error_site = 0;
//  } else {
//    Error_exist = 1;
//    if (table.includes(Dsynd +1 )) {
//      Correctable = 1;
//      Error_site = getIndex(Dsynd)
//    } else {
//      Correctable = 0;
//      Error_site = 0;
//    }
//  }
//  return [Error_exist, Correctable, Error_site];
//}
//
//    function computeSyndrome(rec, H) {
//      let syndrome = [];
//      for (let i = 0; i < H.length; i++) {
//        let sum = 0;
//        for (let j = 0; j < rec.length; j++) {
//          sum += H[i][j] * rec[j];
//        }
//        syndrome.push(sum % 2);
//      }
//      return syndrome;
//    }
//
//
//      function getIndex(value) {
//          for (let i = 0; i < table.length; i++) {
//              if (table[i] === value) {
//                  return i;
//              }
//          }
//          return -1;
//      }
//
//
//function EHPC_decoding(H, rec, table) {
//  let [r, c] = [rec.length, rec[0].length];
//  let org = rec;
//  let req = 0;
//  let row_uncorrect = new Array(r).fill(0); // marked each row that has two errors
//  let col_uncorrect = new Array(c).fill(0); // marked each column that has two errors
//  let row1_vector = new Array(r).fill(0); // marked each row that has errors
//  let col1_vector = new Array(c).fill(0); // marked each column that has errors
//  let col_error_site = new Array(c).fill(0); // record the location of the column that has estimated.
//  let flag = 0;
//
//  // check the error
//  for (let i = 0; i < r; i++) {
//    let rrec = rec[i];
//    let [rError_exist, rCorrectable,rError_site] = Hdecode(rrec, H, table);
//    if (rError_exist === 1) {
//      row_uncorrect[i] = 1 - rCorrectable;
//      row1_vector[i] = 1;
//    }
//  }
//
//  for (let j = 0; j < c; j++) {
//    let crec = [];
//    for (let i = 0; i < r; i++) {
//      crec.push(rec[i][j]);
//    }
//    let [cError_exist, cCorrectable, cError_site] = Hdecode(crec, H, table);
//    if (cError_exist === 1) {
//      col_uncorrect[j] = 1 - cCorrectable;
//      col1_vector[j] = 1;
//    }
//    if (cCorrectable === 1) {
//      col_error_site[j] = cError_site;
//      if (row1_vector[cError_site] === 0) {
//        col_uncorrect[j] = 1;
//      }
//    }
//  }
//
//  if (col1_vector.reduce((a, b) => a + b) + col_uncorrect.reduce((a, b) => a + b) > row1_vector.reduce((a, b) => a + b) + row_uncorrect.reduce((a, b) => a + b) || col1_vector.filter(x => x !== 0).length > row1_vector.filter(x => x !== 0).length) {
//    rec = transpose(rec);
//    flag = 1;
//  } else {
//    if (col1_vector.reduce((a, b) => a + b) + col_uncorrect.reduce((a, b) => a + b) === row1_vector.reduce((a, b) => a + b) + row_uncorrect.reduce((a, b) => a + b) && col1_vector.filter(x => x !== 0).length === row1_vector.filter(x => x !== 0).length) {
//      if (col1_vector.filter(x => x !== 0).length < Math.sqrt(col1_vector.reduce((a, b) => a + b) + col_uncorrect.reduce((a, b) => a + b)) * Math.sqrt(2)) {
//        let s1 = row1_vector.filter(x => x !== 0).length;
//        let s2 = col1_vector.filter(x => x !== 0).length;
//        let rr = row1_vector.map((x, i) => x === 1 ? i : null).filter(x => x !== null);
//        let cc = col1_vector.map((x, i) => x === 1 ? i : null).filter(x => x !== null);
//        for (let i = 0; i < s1; i++) {
//          for (let j = 0; j < s2; j++) {
//            rec[rr[i]][cc[j]] = 1 - rec[rr[i]][cc[j]];
//          }
//        }
//      }
//    }
//  }
//
//  row_uncorrect = new Array(r).fill(0);
//  col_uncorrect = new Array(c).fill(0);
//
//  // First step decoding: row decoding and generate row_vector
//  let row_vector = rec.map((row, i) => {
//    let [rError_exist, rCorrectable,rError_site] = Hdecode(row, H, table);
//    if (rError_exist === 1) {
//      if (rCorrectable === 1) {
//        rec[i][rError_site] = 1 - rec[i][rError_site];
//      } else {
//        row_uncorrect[i] = 1;
//      }
//      return 1;
//    } else {
//      return 0;
//    }
//  });
//
//  // Second step decoding: col decoding and generate col_vector
//  let col_vector = new Array(c).fill(0);
//  for (let j = 0; j < c; j++) {
//    let crec = [];
//    for (let i = 0; i < r; i++) {
//      crec.push(rec[i][j]);
//    }
//    let [cError_exist, cCorrectable, cError_site] = Hdecode(crec, H, table);
//    if (cError_exist === 1) {
//      if (cCorrectable === 1) {
//        console.log(`cError_site: ${cError_site}`);
//        console.log(`rec.length: ${rec.length}`);
//        console.log(`j: ${j}`);
//        rec[cError_site][j] = 1 - rec[cError_site][j];        //index 减一
//      } else {
//        col_uncorrect[j] = 1;
//      }
//      col_vector[j] = 1;
//    }
//}
//  if (row_uncorrect.reduce((a, b) => a + b) * 2 === 3 * col_vector.reduce((a, b) => a + b)) {
//    let s1 = row_uncorrect.filter(x => x !== 0).length;
//    let s2 = col_vector.filter(x => x !== 0).length;
//    let rr = row_uncorrect.map((x, i) => x === 1 ? i : null).filter(x => x !== null);
//    let cc = col_vector.map((x, i) => x === 1 ? i : null).filter(x => x !== null);
//    for (let i = 0; i < s1; i++) {
//      for (let j = 0; j < s2; j++) {
//        rec[rr[i]][cc[j]] = 1 - rec[rr[i]][cc[j]];
//      }
//    }
//  } else {
//    for (let i = 0; i < c; i++) {
//      if (col_error_site[i] !== 0) {
//console.log(`rec 维度: ${rec.length} x ${rec[0].length}`);
//console.log(`col_error_site[i]: ${col_error_site[i]}`);
//console.log(`col_error_site.length: ${col_error_site.length}`);
//console.log(`col_error_site: ${col_error_site}`);
//console.log(`i: ${i}`);
//        rec[col_error_site[i]][i] = 1 - rec[col_error_site[i]][i];
//      }
//    }
//    // Third step decoding: row decoding and generate col_vector
//    for (let i = 0; i < r; i++) {
//      let rrec = rec[i];
//      let [rError_exist, rCorrectable, rError_site] = Hdecode(rrec, H, table);
//      if (rError_exist === 1) {
//        if (rCorrectable === 1) {
//                console.log(`rError_site: ${rError_site}`);
//                console.log(`rec.length: ${rec.length}`);
//                console.log(`i: ${i}`);
//          rec[i][rError_site] = 1 - rec[i][rError_site];
//        } else {
//          for (let j = 0; j < c; j++) {
//            if (col_uncorrect[j] === 1) {
//              rec[i][j] = 1 - rec[i][j];
//            }
//          }
//        }
//      }
//    }
//  }
//
//  for (let i = 0; i < r; i++) {
//    let rrec = rec[i];
//    let [rError_exist, rCorrectable,rError_site] = Hdecode(rrec, H, table);
//    if (rError_exist === 1) {
//      if (rCorrectable === 1) {
//        rec[i][rError_site] = 1 - rec[i][rError_site];
//      } else {
//        req = 1;
//      }
//    }
//  }
//
//  if (req === 0) {
//    for (let i = 0; i < r; i++) {
//      let [cError_exist] = Hdecode(rec.map(row => row[i]), H, table);
//      if (cError_exist === 1) {
//        req = 1;
//        break;
//      }
//    }
//  }
//
//  if (flag === 1) {
//    rec = transpose(rec);
//  }
//
//  return [rec, req];
//}


function Hdecode(rec, H, table) {
  let syndrome = computeSyndrome(rec, H);
  let Dsynd = parseInt(syndrome.join(''), 2);
  let Error_exist, Correctable, Error_site;
  if (Dsynd == 0) {
    Error_exist = 0;
    Correctable = 0;
    Error_site = 0;
  } else {
    Error_exist = 1;
    if (table.includes(Dsynd)) {
      Correctable = 1;
      Error_site = getIndex(Dsynd)
    } else {
      Correctable = 0;
      Error_site = 0;
    }
  }
  return [Error_exist, Correctable, Error_site];
}

    function computeSyndrome(rec, H) {
      let syndrome = [];
      for (let i = 0; i < H.length; i++) {
        let sum = 0;
        for (let j = 0; j < rec.length; j++) {
          sum += H[i][j] * rec[j];
        }
        syndrome.push(sum % 2);
      }
      return syndrome;
    }


      function getIndex(value) {
          for (let i = 0; i < table.length; i++) {
              if (table[i] === value) {
                  return i;
              }
          }
          return -1; //-1
      }


function EHPC_decoding(H, rec, table) {
  let [r, c] = [rec.length, rec[0].length];
  let org = rec;
  let req = 0;
  let row_uncorrect = new Array(r).fill(0); // marked each row that has two errors
  let col_uncorrect = new Array(c).fill(0); // marked each column that has two errors
  let row1_vector = new Array(r).fill(0); // marked each row that has errors
  let col1_vector = new Array(c).fill(0); // marked each column that has errors
  let col_error_site = new Array(c).fill(0); // record the location of the column that has estimated.
  let flag = 0;

  // check the error
  for (let i = 0; i < r; i++) {
    let rrec = rec[i];
    let [rError_exist, rCorrectable,rError_site] = Hdecode(rrec, H, table);
    if (rError_exist === 1) {
      row_uncorrect[i] = 1 - rCorrectable;
      row1_vector[i] = 1;
    }
  }

  for (let j = 0; j < c; j++) {
    let crec = [];
    for (let i = 0; i < r; i++) {
      crec.push(rec[i][j]);
    }
    let [cError_exist, cCorrectable, cError_site] = Hdecode(crec, H, table);
    if (cError_exist === 1) {
      col_uncorrect[j] = 1 - cCorrectable;
      col1_vector[j] = 1;
    }
    if (cCorrectable === 1) {
      col_error_site[j] = cError_site;
      if (row1_vector[cError_site] === 0) {
        col_uncorrect[j] = 1;
      }
    }
  }

  if (col1_vector.reduce((a, b) => a + b) + col_uncorrect.reduce((a, b) => a + b) > row1_vector.reduce((a, b) => a + b) + row_uncorrect.reduce((a, b) => a + b) || col1_vector.filter(x => x !== 0).length > row1_vector.filter(x => x !== 0).length) {
    rec = transpose(rec);
    flag = 1;
  } else {
    if (col1_vector.reduce((a, b) => a + b) + col_uncorrect.reduce((a, b) => a + b) === row1_vector.reduce((a, b) => a + b) + row_uncorrect.reduce((a, b) => a + b) && col1_vector.filter(x => x !== 0).length === row1_vector.filter(x => x !== 0).length) {
      if (col1_vector.filter(x => x !== 0).length < Math.sqrt(col1_vector.reduce((a, b) => a + b) + col_uncorrect.reduce((a, b) => a + b)) * Math.sqrt(2)) {
        let s1 = row1_vector.filter(x => x !== 0).length;
        let s2 = col1_vector.filter(x => x !== 0).length;
        let rr = row1_vector.map((x, i) => x === 1 ? i : null).filter(x => x !== null);
        let cc = col1_vector.map((x, i) => x === 1 ? i : null).filter(x => x !== null);
        for (let i = 0; i < s1; i++) {
          for (let j = 0; j < s2; j++) {
            rec[rr[i]][cc[j]] = 1 - rec[rr[i]][cc[j]];
          }
        }
      }
    }
  }

  row_uncorrect = new Array(r).fill(0);
  col_uncorrect = new Array(c).fill(0);

  // First step decoding: row decoding and generate row_vector
  let row_vector = rec.map((row, i) => {
    let [rError_exist, rCorrectable,rError_site] = Hdecode(row, H, table);
    if (rError_exist === 1) {
      if (rCorrectable === 1) {
        rec[i][rError_site] = 1 - rec[i][rError_site];
      } else {
        row_uncorrect[i] = 1;
      }
      return 1;
    } else {
      return 0;
    }
  });

  // Second step decoding: col decoding and generate col_vector
  let col_vector = new Array(c).fill(0);
  for (let j = 0; j < c; j++) {
    let crec = [];
    for (let i = 0; i < r; i++) {
      crec.push(rec[i][j]);
    }
    let [cError_exist, cCorrectable, cError_site] = Hdecode(crec, H, table);
    if (cError_exist === 1) {
      if (cCorrectable === 1) {
        console.log(`cError_site: ${cError_site}`);
        console.log(`rec.length: ${rec.length}`);
        console.log(`j: ${j}`);
        rec[cError_site][j] = 1 - rec[cError_site][j];        //index 减一
      } else {
        col_uncorrect[j] = 1;
      }
      col_vector[j] = 1;
    }
}
  if (row_uncorrect.reduce((a, b) => a + b) * 2 === 3 * col_vector.reduce((a, b) => a + b)) {
    let s1 = row_uncorrect.filter(x => x !== 0).length;
    let s2 = col_vector.filter(x => x !== 0).length;
    let rr = row_uncorrect.map((x, i) => x === 1 ? i : null).filter(x => x !== null);
    let cc = col_vector.map((x, i) => x === 1 ? i : null).filter(x => x !== null);
    for (let i = 0; i < s1; i++) {
      for (let j = 0; j < s2; j++) {
        rec[rr[i]][cc[j]] = 1 - rec[rr[i]][cc[j]];
      }
    }
  } else {
    for (let i = 0; i < c; i++) {
      if (col_error_site[i] !== 0) {
console.log(`rec 维度: ${rec.length} x ${rec[0].length}`);
console.log(`col_error_site[i]: ${col_error_site[i]}`);
console.log(`col_error_site.length: ${col_error_site.length}`);
console.log(`col_error_site: ${col_error_site}`);
console.log(`i: ${i}`);
        rec[col_error_site[i]][i] = 1 - rec[col_error_site[i]][i];
      }
    }
    // Third step decoding: row decoding and generate col_vector
    for (let i = 0; i < r; i++) {
      let rrec = rec[i];
      let [rError_exist, rCorrectable, rError_site] = Hdecode(rrec, H, table);
      if (rError_exist === 1) {
        if (rCorrectable === 1) {
                console.log(`rError_site: ${rError_site}`);
                console.log(`rec.length: ${rec.length}`);
                console.log(`i: ${i}`);
          rec[i][rError_site] = 1 - rec[i][rError_site];
        } else {
          for (let j = 0; j < c; j++) {
            if (col_uncorrect[j] === 1) {
              rec[i][j] = 1 - rec[i][j];
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < r; i++) {
    let rrec = rec[i];
    let [rError_exist, rCorrectable,rError_site] = Hdecode(rrec, H, table);
    if (rError_exist === 1) {
      if (rCorrectable === 1) {
        rec[i][rError_site] = 1 - rec[i][rError_site];
      } else {
        req = 1;
      }
    }
  }

  if (req === 0) {
    for (let i = 0; i < r; i++) {
      let [cError_exist] = Hdecode(rec.map(row => row[i]), H, table);
      if (cError_exist === 1) {
        req = 1;
        break;
      }
    }
  }

  if (flag === 1) {
    rec = transpose(rec);
  }

  return [rec, req];
}



        function extractSubmatrix(matrix) {
          // 声明一个空数组，用于保存提取出来的交叉部分
          var submatrix = [];

          // 遍历矩阵的第 4 至 7 行
          for (var i = 0; i < 4; i++) {
            // 提取第 i 行的第 4 至 7 列，保存为一个新数组
            var row = matrix[i].slice(0, 4);
            // 将新数组添加到 submatrix 数组中
            submatrix.push(row);
          }

          // 声明一个空数组，用于保存提取出来的 4x4 矩阵
          var result = [];

          // 遍历 submatrix 数组的前 4 个元素，即前 4 行
          for (var i = 0; i < 4; i++) {
            // 声明一个空数组，用于保存当前列的元素
            var col = [];
            // 遍历当前列的前 4 个元素
            for (var j = 0; j < 4; j++) {
              // 将当前元素添加到 col 数组中
              col.push(submatrix[j][i]);
            }
            // 将当前列添加到 result 数组中
            result.push(col);
          }

          // 返回提取出来的 4x4 矩阵
          return result;
        }



