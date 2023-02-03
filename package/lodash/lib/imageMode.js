
/**
 * 图片模式
 * 缩放模式：ctx.drawImage(image, dx, dy, dw, dh)
 * 裁剪模式：ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
 */
class _ImageMode {
  constructor(width, height, styleW, styleH) {

    this.width  = width  // 图片自身宽度
    this.height = height // 图片自身高度

    this.styleW = styleW // 图片样式宽度
    this.styleH = styleH // 图片样式高度
  }

  // aspectFit
  getAspectFit() {
    const { width, height, styleH, styleW  } = this
    const scale = width / height // 图片宽高比例
    
    let [dx, dy, dw, dh] = []

    // 判断图片的长边是宽还是高
    if (width < height) {
      dw = styleH * scale
      dh = styleH

    } else {
      dw = styleW
      dh = styleW / scale
    }

    // 将图片居中显示
    dx = (styleW - dw) / 2
    dy = (styleH - dh) / 2

    return { dx, dy, dw, dh }
  }


  // aspectFill
  getAspectFill() {
    const { width, height, styleH, styleW  } = this
    const scale = width / height // 图片宽高比例
    
    let [dx, dy, dw, dh] = []

    // 判断图片的短边是宽还是高
    if (width < height) {
      dw = styleW
      dh = styleW / scale
      dx = 0
      dy = (styleH - dh) / 2

    } else {
      dw = styleH * scale
      dh = styleH
      dx = (styleW - dw) / 2
      dy = 0
    }

    return { dx, dy, dw, dh }
  }


  // widthFix
  getWidthFix() {
    const { width, height, styleH, styleW  } = this

    let [h, s] = []
  
    // 获取图片本身宽高 与 样式宽高的比例
    s = styleW / width 
    h = height * s

    return { height: h } 
  }


  // heightFix
  getHeightFix() {
    const { width, height, styleH, styleW  } = this

    let [w, s] = []
  
    // 获取图片本身宽高 与 样式宽高的比例
    s = styleH / height 
    w = width * s

    return { width: w } 
  }


  // top
  getTop() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = (width - sw) / 2
    sy = 0
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }


  // bottom
  getBottom() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = (width - sw) / 2
    sy = height - sh
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }


  // center
  getCenter() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = (width  - sw) / 2
    sy = (height - sh) / 2
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }


  // left
  getLeft() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = 0
    sy = (height - sh) / 2
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }


  // right
  getRight() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = (width - sw)
    sy = (height - sh) / 2
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }


  // top left
  getTopLeft() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = 0
    sy = 0
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }


  // top right
  getTopRight() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = width - sw
    sy = 0
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }


  // bottom left
  getBottomLeft() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = 0
    sy = height - sh
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }


  // bottom right
  getBottomRight() {
    const { width, height, styleH, styleW  } = this

    let [sx, sy, sw, sh, dx, dy, dw, dh] = []

    sw = styleW
    sh = styleH
    sx = width  - sw
    sy = height - sh
  
    dw = styleW
    dh = styleH
    dx = 0
    dy = 0
  
    return { sx, sy, sw, sh, dx, dy, dw, dh }
  }
}

module.exports = _ImageMode
