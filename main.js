function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertexShaderSource = `
    void main() {
        gl_PointSize = 100.0;
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    }
    `;

    var fragmentShaderSource = `
    void main() {
        gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    }
    `;

    //buat .c di GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // compile .c jadi .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // siapkan wadah untuk .exe(shader program)
    var shaderProgram = gl.createProgram();

    //masukan .o kedalam .exe
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    //menyambung antar .o agar
    //  runnable context di dalam .exe
    gl.linkProgram(shaderProgram);
    
    // Mulai menggunakan context (analogi = cat)
    gl.useProgram(shaderProgram);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
    }