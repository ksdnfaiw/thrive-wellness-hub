Add-Type -AssemblyName System.Drawing
$inputFile = "C:\Users\Attentive\Downloads\thrive\thrive-wellness-hub\public\favicon.png"
$outputFile = "C:\Users\Attentive\Downloads\thrive\thrive-wellness-hub\public\favicon.png"

$img = [System.Drawing.Image]::FromFile($inputFile)
$bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)

# Draw white background
$graphics.Clear([System.Drawing.Color]::White)
# Draw original image on top
$graphics.DrawImage($img, 0, 0)

$img.Dispose()
$graphics.Dispose()

$bmp.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
