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

function compareStrings(str1, str2) {
  var matrix1 = convertToMatrix(str1);
  var matrix2 = convertToMatrix(str2);

  if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
    console.log("两个矩阵的大小不同。");
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



        function convertToString(matrix) {
          var str = "";
          for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[0].length; j++) {
              str += matrix[i][j];
            }
          }
          return str;
        }


       function stringToMatrix(str, rows, columns) {
        // 创建二维矩阵，将字符串中的字符填入矩阵中
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


      function matrixMultiply(A, B) {
        // 获取矩阵A和B的行列数
        let m = A.length;
        let n = B[0].length;

        // 创建结果矩阵C，大小为m x n，初始值为0
        let C = new Array(m);
        for (let i = 0; i < m; i++) {
          C[i] = new Array(n).fill(0);
        }

        // 对结果矩阵中的每个元素进行计算
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
            for (let k = 0; k < B.length; k++) {
              C[i][j] += A[i][k] * B[k][j];
            }
          }
        }

        return C;
      }

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
            if (Math.random() < errorRate) { // errorRate的概率使元素发生随机错误
              g_matrix[i][j] = 1 - matrix[i][j]; // 随机将0变成1，将1变成0
            }
          }
        }



        return g_matrix;
      }


        function simulateChannel(matrix_error, errorRate) {
          // 遍历二维数组的每个元素
          for (let i = 0; i < matrix_error.length; i++) {
            for (let j = 0; j < matrix_error[i].length; j++) {
              // 生成随机数，如果小于错误率则将元素更改为 0 或 1
              if (Math.random() < errorRate) {
                matrix_error[i][j] = Math.floor(Math.random() * 2);
              }
            }
          }
          return matrix_error;
        }

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

        let G = [
                  [1, 1, 0, 1, 0, 0, 0],
                  [0, 1, 1, 0, 1, 0, 0],
                  [1, 1, 1, 0, 0, 1, 0],
                  [1, 0, 1, 0, 0, 0, 1]
                ];  


        let H = [
                    [1,0,0,1,0,1,1],
                    [0,1,0,1,1,1,0],
                    [0,0,1,0,1,1,1]
                ];



        function syndtable(H) {
            const n = H[0].length; // 编码后的消息长度
            const k = n - H.length; // 编码前的消息长度
            const p = H.length; // 校验位的数量

            // 生成所有可能的错误向量
            const errors = [];
            for (let i = 0; i < n; i++) {
            const error = new Array(n).fill(0);
            error[i] = 1;
            errors.push(error);
            }

            // 生成所有可能的综合值
            const syndromes = [];
            for (let e of errors) {
            const syndrome = new Array(p).fill(0);
            for (let i = 0; i < p; i++) {
            syndrome[i] = e.reduce((sum, x, j) => sum + x * H[i][j], 0) % 2;
            }
            syndromes.push(syndrome);
            }

            // 生成校验位矩阵的综合表
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

            // SHPC校正
        function SHPC_decoding1(H, rec) {
            //console.log('校正之前    '+JSON.stringify(rec));
//                     var T = syndtable(H); // 生成校验位矩阵的综合表
                   T=[[0,0,0,0,0,0,0],[0,0,1,0,0,0,0],[0,1,0,0,0,0,0],[0,0,0,0,1,0,0],[1,0,0,0,0,0,0],[0,0,0,0,0,0,1],[0,0,0,1,0,0,0],[0,0,0,0,0,1,0]]
                    var r = rec.length; // 行数
                    var c = rec[0].length; // 列数
                    var row_error = []; // 存储行错误的数组
                    var col_error = []; // 存储列错误的数组
        
              for (let i = 0; i < r; i++) {
                const S = rec[i].reduce((acc, val, j) => acc ^ (val * H[0][j]), 0) +
                  rec[i].reduce((acc, val, j) => acc ^ (val * H[1][j]), 0) * 2 +
                  rec[i].reduce((acc, val, j) => acc ^ (val * H[2][j]), 0) * 4;
                const index = S !== 0 ? T[S] : 0;
                if (index !== 0) {
                  row_error.push(i + 1);
                }
              }

              for (let i = 0; i < c; i++) {
                const S = rec.reduce((acc, val, j) => acc ^ (val[i] * H[0][j]), 0) +
                  rec.reduce((acc, val, j) => acc ^ (val[i] * H[1][j]), 0) * 2 +
                  rec.reduce((acc, val, j) => acc ^ (val[i] * H[2][j]), 0) * 4;
                const index = S !== 0 ? T[S] : 0;
                if (index !== 0) {
                  col_error.push(i + 1);
                }
              }
            console.log(row_error);
            console.log(col_error);

            if (row_error.length === col_error.length) { // 如果行错误数等于列错误数
            if (row_error.length <= 2) { // 如果错误数小于等于2
            for (var i = 0; i < row_error.length; i++) { // 遍历行错误数组
            for (var j = 0; j < col_error.length; j++) { // 遍历列错误数组
            rec[row_error[i] - 1][col_error[j] - 1] = (rec[row_error[i] - 1][col_error[j] - 1] + 1) % 2; // 反转当前错误位置的值
            }
            }
            rec = row_correct(rec, H, T); // 对行进行校正
            } else { // 如果错误数大于2
                rec = row_correct(rec, H, T); // 先对行进行一次校正
                rec = col_correct(rec, H, T); // 再对列进行一次校正
                rec = row_correct(rec, H, T); // 最后再对行进行一次校正
            }
            } else { // 如果行错误数不等于列错误数
            if (row_error.length > col_error.length) { // 如果行错误数大于列错误数
                rec = row_correct(rec, H, T); // 先对行进行一次校正
                rec = col_correct(rec, H, T); // 再对列进行一次校正
                rec = row_correct(rec, H, T); // 最后再对行进行一次校正
            } else { // 如果行错误数小于列错误数
                rec = col_correct(rec, H, T); // 先对列进行一次校正
                rec = row_correct(rec, H, T); // 再对行进行一次校正
                rec = col_correct(rec, H, T); // 最后再对列进行一次校正
            }
            }
            return rec;
            }


// function row_correct(rec, H, T) {
//   const n = H[0].length; // 编码后的消息长度
//   const k = n - H.length; // 编码前的消息长度
//   const p = H.length; // 校验位的数量

//   // 对每一行进行校正
//   for (let i = 0; i < k; i++) {
//     const row = rec[i];
//     const syndrome = new Array(p).fill(0);

//     // 计算行的综合值
//     for (let j = 0; j < p; j++) {
//       syndrome[j] = row.reduce((sum, x, k) => sum + x * H[j][k], 0) % 2;
//     }

//     // 查找综合表，找到对应的错误向量
//     const code = Bin2int(syndrome);
//     const error = T[code];

//     // 如果找到了错误向量，对行进行校正
//     if (error !== null) {
//       for (let j = 0; j < n; j++) {
//         rec[i][j] = (rec[i][j] + error[j]) % 2;
//       }
//     }
//   }

//   return rec;
// }


// 调试、2023.7.11



        function row_correct(rec, H, T) {
          if (!rec || !H || !T) {
            throw new Error('Invalid input');
          }
          const r = rec.length;
          const Ht = matrixTranspose(H);
          const Tmod2 = T.map(row => row.map(val => val % 2));
          for (let i = 0; i < r; i++) {
            const S = matrixMultiplication([rec[i]], Ht)[0].map(x => x % 2);
            const index = Bin2int(S);
            rec[i] = addArrays(rec[i], Tmod2[index]).map(x => x % 2);
          }
          return rec;
        }

        function col_correct(rec, H, T) {
          if (!rec || !H || !T) {
            throw new Error('Invalid input');
          }
          const c = rec[0].length;
          const Ht = matrixTranspose(H);
          const Tmod2 = T.map(row => row.map(val => val % 2));
          for (let i = 0; i < c; i++) {
            const col = rec.map(row => row[i]);
            const S = matrixMultiplication([col], Ht)[0].map(x => x % 2);
            const index = Bin2int(S);
            for (let j = 0; j < rec.length; j++) {
              rec[j][i] = (col[j] + Tmod2[index][j]) % 2;
            }
          }
          return rec;
        }

        function correctErrors(rec, H, T) {
          if (!rec || !H || !T) {
            throw new Error('Invalid input');
          }
          const correctedRec1 = row_correct(rec, H, T);
          const correctedRec2 = col_correct(correctedRec1, H, T);
          return correctedRec2;
        }


        function matrixTranspose(matrix) {
          const rows = matrix.length;
          const cols = matrix[0].length;
          const result = new Array(cols);
          for (let j = 0; j < cols; j++) {
            result[j] = new Array(rows);
            for (let i = 0; i < rows; i++) {
              result[j][i] = matrix[i][j];
            }
          }
          return result;
        }


        function matrixMultiplication(A, B) {
          const rowsA = A.length;
          const colsA = A[0].length;
          const rowsB = B.length;
          const colsB = B[0].length;
          if (colsA !== rowsB) {
            throw new Error('Invalid dimensions');
          }
          const C = new Array(rowsA);
          for (let i = 0; i < rowsA; i++) {
            C[i] = new Array(colsB);
            for (let j = 0; j < colsB; j++) {
              C[i][j] = 0;
              for (let k = 0; k < colsA; k++) {
                C[i][j] += A[i][k] * B[k][j];
              }
            }
          }
          return C;
        }

        function addArrays(arr1, arr2) {
          const result = [];
          const n = arr1.length;
          if (n !== arr2.length) {
            throw new Error('Arrays must have the same length');
          }
          for (let i = 0; i < n; i++) {
            result.push((arr1[i] + arr2[i]) % 2);
          }
          return result;
        }

// function row_correct(rec, H, T) {
//   let r = rec.length;
//   for (let i = 0; i < r; i++) {
//       let S = matrixModulo(matrixMultiply([rec[i]], transpose(H)), 2);
//       let index = bin2int(S);
//       rec[i] = matrixModulo(matrixAdd([rec[i]], [T[index]]), 2)[0];
//   }
//   return rec;
// }

// function col_correct(rec, H, T) {
//   let c = rec[0].length;
//   for (let i = 0; i < c; i++) {
//       let col = getColumn(rec, i);
//       let S = matrixModulo(matrixMultiply(transpose([col]), transpose(H)), 2);
//       let index = bin2int(S);
//       console.log(JSON.stringify(transpose([col])));
//       console.log(JSON.stringify([T[index]]));
//       setColumn(rec, i, transpose(matrixModulo(matrixAdd([col], [T[index]]), 2))[0]);
//   }
//   return rec;
// }








        function getColumn(matrix, colIndex) {
          return matrix.map(row => row[colIndex]);
        }

        function setColumn(matrix, colIndex, newCol) {
          for (let i = 0; i < matrix.length; i++) {
              matrix[i][colIndex] = newCol[i];
          }
        }

        function bin2int(binArray) {
          let result = 0;
          for (let i = 0; i < binArray[0].length; i++) {
              result += binArray[0][i] * Math.pow(2, binArray[0].length - 1 - i);
          }
          return result;
        }

        function matrixMultiply(A, B) {
          let result = [];
          for (let i = 0; i < A.length; i++) {
              result[i] = [];
              for (let j = 0; j < B[0].length; j++) {
                  result[i][j] = 0;
                  for (let k = 0; k < A[0].length; k++) {
                      result[i][j] += A[i][k] * B[k][j];
                  }
              }
          }
          return result;
        }

        function matrixModulo(A, n) {
          return A.map(row => row.map(val => val % n));
        }

        // function matrixAdd(A, B) {
        //   return A.map((row, rowIndex) => row.map((val, colIndex) => val + B[rowIndex][colIndex]));
        // }

        function matrixAdd(A, B) {
          if (A.length !== B.length || A[0].length !== B[0].length) {
              throw new Error('Input matrices must have the same dimensions');
          }
          let result = [];
          for (let i = 0; i < A.length; i++) {
              result[i] = [];
              for (let j = 0; j < A[0].length; j++) {
                  result[i][j] = A[i][j] + B[i][j];
              }
          }
          return result;
        }

        function transpose(A) {
          return A[0].map((_, colIndex) => A.map(row => row[colIndex]));
        }

//调试






//2023.7.11

// function col_correct(rec, H, T) {
//   const n = H[0].length; // 编码后的消息长度
//   const k = n - H.length; // 编码前的消息长度
//   const p = H.length; // 校验位的数量

//   // 对每一列进行校正
//   for (let j = k; j < n; j++) {
//     const col = [];
//     for (let i = 0; i < k; i++) {
//       col.push(rec[i][j]);
//     }

//     const syndrome = new Array(p).fill(0);

//     // 计算列的综合值
//     for (let i = 0; i < p; i++) {
//       syndrome[i] = col.reduce((sum, x, k) => sum + x * H[i][k + k], 0) % 2;
//     }

//     // 查找综合表，找到对应的错误向量
//     const code = Bin2int(syndrome);
//     const error = T[code];

//     // 如果找到了错误向量，对列进行校正
//     if (error !== null) {
//       for (let i = 0; i < k; i++) {
//         rec[i][j] = (rec[i][j] + error[i]) % 2;
//       }
//     }
//   }

//   return rec;
// }


        function rem(a, b) {
          return a.map((value, index) => (value + b[index]) % 2);
        }

        // 矩阵乘法函数
        function mul(a, b) {
          var r = a.length; // a的行数
          var c = b[0].length; // b的列数
          var res = [];
          for (var i = 0; i < r; i++) { // 遍历a的行数
            var row = [];
            for (var j = 0; j < c; j++) { // 遍历b的列数
              var sum = 0;
              for (var k = 0; k < b.length; k++) { // 遍历b的行数
                sum += a[i][k] * b[k][j]; // 计算矩阵乘积的每个元素
              }
              row.push(sum % 2); // 将计算结果添加到行中
            }
            res.push(row); // 将行添加到结果矩阵中
          }

          return res;
        }

        // 转置函数
        function transpose(mat) {
          return mat[0].map((_, index) => mat.map(row => row[index]));
        }



        function SHPC_decoding(encodedMatrix) {
          const numRows = encodedMatrix.length;
          const numCols = encodedMatrix[0].length;

          function xor(arr) {
            return arr.reduce((acc, curr) => acc ^ curr, 0);
          }

          function findError(arr) {
            const calculatedParity = xor(arr.slice(0, -1));
            const receivedParity = arr[arr.length - 1];
            const errorIndex = calculatedParity ^ receivedParity;

            if (errorIndex === 0) return -1;
            return errorIndex - 1;
          }

          function correctError(matrix, errorRow, errorCol) {
            matrix[errorRow][errorCol] ^= 1;
          }

          function decodeRows(matrix) {
            const rowErrors = [];

            for (let i = 0; i < numRows; i++) {
              const errorIndex = findError(matrix[i]);
              if (errorIndex >= 0) {
                rowErrors.push({ row: i, col: errorIndex });
              }
            }

            return rowErrors;
          }

          function decodeCols(matrix) {
            const colErrors = [];

            for (let i = 0; i < numCols; i++) {
              const col = matrix.map(row => row[i]);
              const errorIndex = findError(col);
              if (errorIndex >= 0) {
                colErrors.push({ row: errorIndex, col: i });
              }
            }

            return colErrors;
          }

          function Two_step_decoding(matrix) {
            const rowErrors = decodeRows(matrix);
            const colErrors = decodeCols(matrix);

            rowErrors.forEach(({ row, col }) => correctError(matrix, row, col));
            colErrors.forEach(({ row, col }) => correctError(matrix, row, col));
          }

          function Three_step_decoding(matrix) {
            Two_step_decoding(matrix);
            decodeRows(matrix).forEach(({ row, col }) => correctError(matrix, row, col));
          }

          const rowErrors = decodeRows(encodedMatrix);

          const colErrors = decodeCols(encodedMatrix);

          if (rowErrors.length <= 2 && colErrors.length <= 2) {
            rowErrors.forEach(({ row, col }) => correctError(encodedMatrix, row, col));
            colErrors.forEach(({ row, col }) => correctError(encodedMatrix, row, col));
          } else {
            if (rowErrors.length > colErrors.length) {
              Two_step_decoding(encodedMatrix);
            } else {
              Three_step_decoding(encodedMatrix);
            }
          }

          // Remove parity bits
          return encodedMatrix.map(row => row.slice(0, -1));
        }



        function extractSubmatrix(matrix) {
          // 声明一个空数组，用于保存提取出来的交叉部分
          var submatrix = [];

          // 遍历矩阵的第 4 至 7 行
          for (var i = 3; i < 7; i++) {
            // 提取第 i 行的第 4 至 7 列，保存为一个新数组
            var row = matrix[i].slice(3, 7);
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


