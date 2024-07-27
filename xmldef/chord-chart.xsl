<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
        <html>
            <head>
                <link rel="shortcut icon" href="/chord-chart/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" type="text/css" href="/chord-chart/xmldef/chord-chart.css" />
            </head>
            <body>
                <xsl:apply-templates />
            </body>
        </html>
    </xsl:template>

    <xsl:template match="ChordChart">
        <ChordChart class="ChordChart">
            <xsl:apply-templates />
        </ChordChart>
    </xsl:template>

</xsl:stylesheet>