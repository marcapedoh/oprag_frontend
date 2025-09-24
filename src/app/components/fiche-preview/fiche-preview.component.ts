import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-fiche-preview',
  templateUrl: './fiche-preview.component.html',
  styleUrls: ['./fiche-preview.component.css']
})
export class FichePreviewComponent implements OnInit {
  @Input() inspectionData: any;
  @Output() close = new EventEmitter<void>();

  currentPage: number = 1;
  totalPages: number = 2;

  page1Html: SafeHtml = '';
  page2Html: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.generatePages();
  }

  ngOnChanges(): void {
    if (this.inspectionData) {
      this.generatePages();
    }
  }

  private generatePages(): void {
    this.page1Html = this.sanitizer.bypassSecurityTrustHtml(this.getPage1Html());
    this.page2Html = this.sanitizer.bypassSecurityTrustHtml(this.getPage2Html());
  }

  private getPage1Html(): string {
    const data = this.inspectionData || {};

    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <style type="text/css">
    a {text-decoration: none}
    body { font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; margin: 0; padding: 0; }
    table { border-collapse: collapse; empty-cells: show; }
  </style>
</head>
<body text="#000000" link="#000000" alink="#000000" vlink="#000000">
<table role="none" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td width="50%">&nbsp;</td><td align="center">

<table id="JR_PAGE_ANCHOR_0_1" role="none" class="jrPage" data-jr-height="842" cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 595px; border-collapse: collapse; background-color: white;">
<tr role="none" valign="top" style="height:0">
<td style="width:30px"></td>
<td style="width:1px"></td>
<td style="width:60px"></td>
<td style="width:36px"></td>
<td style="width:3px"></td>
<td style="width:29px"></td>
<td style="width:1px"></td>
<td style="width:49px"></td>
<td style="width:1px"></td>
<td style="width:20px"></td>
<td style="width:20px"></td>
<td style="width:20px"></td>
<td style="width:20px"></td>
<td style="width:9px"></td>
<td style="width:1px"></td>
<td style="width:99px"></td>
<td style="width:29px"></td>
<td style="width:1px"></td>
<td style="width:38px"></td>
<td style="width:13px"></td>
<td style="width:10px"></td>
<td style="width:10px"></td>
<td style="width:20px"></td>
<td style="width:12px"></td>
<td style="width:8px"></td>
<td style="width:20px"></td>
<td style="width:3px"></td>
<td style="width:2px"></td>
<td style="width:30px"></td>
</tr>

<!-- Espacement supérieur -->
<tr valign="top" style="height:30px">
<td colspan="29"></td>
</tr>

<!-- Logos -->
<tr valign="top" style="height:49px">
<td colspan="2"></td>
<td>
<div style="height: 49px; background-color: #f0f0f0; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center; font-size: 10px;">LOGO</div>
</td>
<td colspan="17"></td>
<td colspan="4">
<div style="height: 49px; background-color: #f0f0f0; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center; font-size: 10px;">LOGO</div>
</td>
<td colspan="5"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:3px">
<td colspan="29"></td>
</tr>

<!-- Ligne de séparation -->
<tr valign="top" style="height:1px">
<td></td>
<td colspan="26" style="border-top: 2px solid #000000;"></td>
<td colspan="2"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:7px">
<td colspan="29"></td>
</tr>

<!-- Titre principal -->
<tr valign="top" style="height:31px">
<td colspan="4"></td>
<td colspan="15" style="border: 1px solid #000000; padding-top: 5px; padding-left: 2px; padding-bottom: 2px; padding-right: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 14px; line-height: 1.2578125; font-weight: bold;">FICHE D'INSPECTION CAMIONNAGE OPRAG</span>
</td>
<td colspan="10"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:9px">
<td colspan="29"></td>
</tr>

<!-- N° de rapport et Date de contrôle -->
<tr valign="top" style="height:20px">
<td colspan="2"></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Motif de contrôle:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="8" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.motifControle || ''}</span>
</td>
<td colspan="3">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:110px"></td>
<td style="width:19px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Norme de fabrication:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="10" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.normeFabrication || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:10px">
<td colspan="29"></td>
</tr>

<!-- Titre POINTS DE CONTRÔLE -->
<tr valign="top" style="height:30px">
<td colspan="9"></td>
<td colspan="7" style="text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 14px; line-height: 1.2578125; font-weight: bold; text-decoration: underline;">POINTS DE CONTRÔLE</span>
</td>
<td colspan="13"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:10px">
<td colspan="29"></td>
</tr>

<!-- En-têtes des points de contrôle -->
<tr valign="top" style="height:20px">
<td></td>
<td colspan="8">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:180px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:161px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Points de contrôle</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125; font-weight: bold;">C</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125; font-weight: bold;">N.C</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125; font-weight: bold;">B.E</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125; font-weight: bold;">M.E</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2"></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:180px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:154px"></td>
<td style="width:17px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Points de contrôle</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">C</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">N.C</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">B.E</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">M.E</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="3"></td>
</tr>

<!-- Points de contrôle - Lignes individuelles -->
${this.generateControlPointRows(data)}

<!-- Pied de page avec logos -->
<tr valign="top" style="height:6px">
<td></td>
<td colspan="4" rowspan="4">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:40px"></td>
<td style="width:60px"></td>
</tr>
<tr valign="top" style="height:6px">
<td colspan="2"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #213E78; font-size: 14px; line-height: 1.2578125; font-weight: bold;">CFHP</span>
</td>
</tr>
<tr valign="top" style="height:12px">
<td colspan="2"></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="24"></td>
</tr>
<tr valign="top" style="height:3px">
<td></td>
<td colspan="16"></td>
<td colspan="7" rowspan="3">
<div style="width: 75px; height: 40px; background-color: #f0f0f0; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center; font-size: 10px;">LOGO</div>
</td>
<td></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td colspan="2"></td>
<td colspan="8" style="text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 12px; line-height: 1.2578125; font-weight: bold;">PARTENAIRES TECHNIQUES</span>
</td>
<td colspan="5"></td>
<td></td>
</tr>
<tr valign="top" style="height:9px">
<td></td>
<td colspan="14"></td>
<td></td>
</tr>
<tr valign="top" style="height:20px">
<td colspan="29"></td>
</tr>

</table>
</td><td width="50%">&nbsp;</td></tr>
</table>
</body>
</html>
    `;
  }

  private generateControlPointRows(data: any): string {
    const controlPoints = [
      'Roues, Jantes et leurs Fixations',
      'Diagnostic pannes électroniques',
      'Fonctionnement manomètre de pression',
      'Bavette Arrière / Couvre roue',
      'État des bonbonnes d\'air',
      'Twist Lock + Sangles,Chaînes',
      'Usure Grue camion multi-lève',
      'Dommage visible grue multi-lève',
      'Vérification chassie multi-lève',
      'Vérification vérins multi-lève',
      'Vérification axes,goupilles,galets de guidage',
      'Essai de fonctionnement multi-lève',
      'Assurance',
      'Visite Technique',
      'Carte Grise',
      'Extincteur',
      'EPI',
      'Phares'
    ];

    const controlPointsRight = [
      'Rétroviseurs',
      'État de la Benne / Plateau',
      'Main d\'accouplement',
      'Tolérance usure',
      'Système de charge batterie',
      'Essai freinage',
      'Flexibles de freinage',
      'Suspension',
      'Amortisseurs',
      'État des Béquilles',
      'Dispositif d\'attelage',
      'Usure maillon crochets',
      'Marquage charge multi-lève',
      'Plaques d\'immatriculation',
      'Trousse premier secours',
      'Feux de détresses',
      'Gyrophares',
      'Essuie-Glaces'
    ];

    let rows = '';
    for (let i = 0; i < controlPoints.length; i++) {
      const leftPoint = controlPoints[i];
      const rightPoint = controlPointsRight[i];
      const leftData = data?.pointsControle?.[leftPoint] || {};
      const rightData = data?.pointsControle?.[rightPoint] || {};

      rows += `
<tr valign="top" style="height:18px">
<td></td>
<td colspan="8" style="border: 1px solid #000000; padding-top: 2px; padding-left: 4px; padding-bottom: 2px; padding-right: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125;">${leftPoint}</span>
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${leftData.status === 'C' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${leftData.status === 'NC' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${leftData.status === 'BE' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${leftData.status === 'ME' ? '✓' : ''}
</td>
<td colspan="2"></td>
<td colspan="5" style="border: 1px solid #000000; padding-top: 2px; padding-left: 4px; padding-bottom: 2px; padding-right: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125;">${rightPoint}</span>
</td>
<td colspan="2" style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${rightData.status === 'C' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${rightData.status === 'NC' ? '✓' : ''}
</td>
<td colspan="2" style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${rightData.status === 'BE' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${rightData.status === 'ME' ? '✓' : ''}
</td>
<td colspan="3"></td>
</tr>`;
    }
    return rows;
  }

  private getPage2Html(): string {
    const data = this.inspectionData || {};

    return `${this.getPage2HtmlContent(data)}`;
  }

  private getPage2HtmlContent(data: any): string {
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <style type="text/css">
    a {text-decoration: none}
    body { font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; margin: 0; padding: 0; }
    table { border-collapse: collapse; empty-cells: show; }
  </style>
</head>
<body text="#000000" link="#000000" alink="#000000" vlink="#000000">
<table role="none" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td width="50%">&nbsp;</td><td align="center">

<table id="JR_PAGE_ANCHOR_0_1" role="none" class="jrPage" data-jr-height="842" cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 595px; border-collapse: collapse; background-color: white;">

<!-- Espacement supérieur -->
<tr valign="top" style="height:40px">
<td colspan="27"></td>
</tr>

<!-- En-têtes des points de contrôle page 2 -->
<tr valign="top" style="height:20px">
<td colspan="2"></td>
<td colspan="6">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:180px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:161px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Points de contrôle</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:3px"></td>
<td style="width:15px"></td>
<td style="width:2px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125; font-weight: bold;">C</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125; font-weight: bold;">N.C</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125; font-weight: bold;">B.E</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:21px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
<td style="width:1px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125; font-weight: bold;">M.E</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td></td>
<td colspan="4">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:180px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:154px"></td>
<td style="width:17px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Points de contrôle</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:2px"></td>
<td style="width:15px"></td>
<td style="width:3px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">C</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">N.C</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td>
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">B.E</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:20px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">M.E</span>
</td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="3"></td>
</tr>

<!-- Points de contrôle page 2 -->
${this.generatePage2ControlPoints(data)}

<!-- Légende -->
<tr valign="top" style="height:80px">
<td colspan="2"></td>
<td colspan="21">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:529px"></td>
</tr>
<tr valign="top" style="height:80px">
<td style="pointer-events: auto; background-color: #F0F0F0; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:100px"></td>
<td style="width:180px"></td>
<td style="width:100px"></td>
<td style="width:140px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 11px; line-height: 1.2578125; font-weight: bold; text-decoration: underline;">Légende:</span>
</td>
<td colspan="3"></td>
</tr>
<tr valign="top" style="height:5px">
<td colspan="5"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">B.E= Bon état</span>
</td>
<td></td>
<td style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">M.E= Mauvais état</span>
</td>
<td></td>
</tr>
<tr valign="top" style="height:10px">
<td colspan="5"></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="4"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:20px">
<td colspan="27"></td>
</tr>

<!-- Section Observations -->
<tr valign="top" style="height:80px">
<td colspan="4"></td>
<td colspan="21">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:529px"></td>
</tr>
<tr valign="top" style="height:80px">
<td style="pointer-events: auto; background-color: #FCFCFC; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:100px"></td>
<td style="width:258px"></td>
<td style="width:19px"></td>
<td style="width:18px"></td>
<td style="width:3px"></td>
<td style="width:76px"></td>
<td style="width:24px"></td>
<td style="width:22px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 11px; line-height: 1.2578125; font-weight: bold; text-decoration: underline;">OBSERVATIONS:</span>
</td>
<td colspan="4"></td>
<td style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 11px; line-height: 1.2578125; font-weight: bold; text-decoration: underline;">Avis:</span>
</td>
<td colspan="2"></td>
</tr>
<tr valign="top" style="height:5px">
<td colspan="9"></td>
</tr>
<tr valign="top" style="height:40px">
<td></td>
<td colspan="2" style="pointer-events: auto; text-indent: 0px; text-align: left; padding: 5px; vertical-align: top;">
<span style="font-size: 10px;">${data.observations || ''}</span>
</td>
<td></td>
<td style="pointer-events: auto; border: 1px solid #000000; padding: 1px; text-indent: 0px; text-align: left;">
${data.avis === 'Favorable' ? '✓' : ''}
</td>
<td></td>
<td colspan="2" style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Favorable</span>
</td>
<td></td>
</tr>
<tr valign="top" style="height:4px">
<td></td>
<td colspan="3"></td>
<td style="pointer-events: auto; border: 1px solid #000000; padding: 1px; text-indent: 0px; text-align: left;">
${data.avis === 'Défavorable' ? '✓' : ''}
</td>
<td></td>
<td colspan="2" style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Défavorable</span>
</td>
<td></td>
</tr>
<tr valign="top" style="height:11px">
<td colspan="9"></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2"></td>
</tr>

<!-- Section Recommandations -->
<tr valign="top" style="height:80px">
<td colspan="4"></td>
<td colspan="21">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:529px"></td>
</tr>
<tr valign="top" style="height:80px">
<td style="pointer-events: auto; background-color: #FCFCFC; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:148px"></td>
<td style="width:359px"></td>
<td style="width:13px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 11px; line-height: 1.2578125; font-weight: bold; text-decoration: underline;">RECOMMANDATIONS:</span>
</td>
<td colspan="2"></td>
</tr>
<tr valign="top" style="height:5px">
<td colspan="4"></td>
</tr>
<tr valign="top" style="height:44px">
<td></td>
<td colspan="2" style="pointer-events: auto; text-indent: 0px; text-align: left; padding: 5px; vertical-align: top;">
<span style="font-size: 10px;">${data.recommandations || ''}</span>
</td>
<td></td>
</tr>
<tr valign="top" style="height:11px">
<td colspan="4"></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:20px">
<td colspan="27"></td>
</tr>

<!-- Section Signatures -->
<tr valign="top" style="height:60px">
<td colspan="3"></td>
<td colspan="3">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:169px"></td>
</tr>
<tr valign="top" style="height:60px">
<td style="pointer-events: auto; background-color: #FFFFFF; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:10px"></td>
<td style="width:148px"></td>
<td style="width:11px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Nom du représentant société</span>
</td>
<td></td>
</tr>
<tr valign="top" style="height:40px">
<td></td>
<td style="text-align: center; padding-top: 10px;">
<span style="font-size: 10px;">${data.representantSociete || ''}</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="2"></td>
<td colspan="7">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:1px"></td>
<td style="width:169px"></td>
</tr>
<tr valign="top" style="height:60px">
<td></td>
<td style="pointer-events: auto; background-color: #FFFFFF; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:10px"></td>
<td style="width:148px"></td>
<td style="width:10px"></td>
<td style="width:2px"></td>
</tr>
<tr valign="top" style="height:30px">
<td></td>
<td style="pointer-events: auto; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Nom du représentant BA'JINN Consulting</span>
</td>
<td colspan="2"></td>
</tr>
<tr valign="top" style="height:2px">
<td colspan="4"></td>
</tr>
<tr valign="top" style="height:28px">
<td></td>
<td style="text-align: center;">
<span style="font-size: 10px;">${data.representantBajinn || ''}</span>
</td>
<td colspan="2"></td>
</tr>
</table>
</div>
</div>
</td>
<td></td>
<td colspan="8">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:169px"></td>
</tr>
<tr valign="top" style="height:60px">
<td style="pointer-events: auto; background-color: #FFFFFF; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:148px"></td>
<td style="width:11px"></td>
<td style="width:1px"></td>
</tr>
<tr valign="top" style="height:30px">
<td></td>
<td style="pointer-events: auto; text-indent: 0px; text-align: center;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Nom du représentant CFHP Services</span>
</td>
<td colspan="2"></td>
</tr>
<tr valign="top" style="height:28px">
<td></td>
<td style="text-align: center;">
<span style="font-size: 10px;">${data.representantCFHP || ''}</span>
</td>
<td colspan="2"></td>
</tr>
<tr valign="top" style="height:2px">
<td colspan="4"></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="3"></td>
</tr>

<!-- Grande zone d'espacement -->
<tr valign="top" style="height:304px">
<td colspan="27"></td>
</tr>

<!-- Pied de page avec logos et partenaires -->
<tr valign="top" style="height:6px">
<td></td>
<td colspan="4" rowspan="4">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:40px"></td>
<td style="width:60px"></td>
</tr>
<tr valign="top" style="height:6px">
<td colspan="2"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #213E78; font-size: 14px; line-height: 1.2578125; font-weight: bold;">CFHP</span>
</td>
</tr>
<tr valign="top" style="height:12px">
<td colspan="2"></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="22"></td>
</tr>
<tr valign="top" style="height:3px">
<td></td>
<td colspan="14"></td>
<td colspan="7" rowspan="3">
<div style="width: 75px; height: 40px; background-color: #f0f0f0; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center; font-size: 10px;">LOGO</div>
</td>
<td></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td colspan="2"></td>
<td colspan="10" style="text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 12px; line-height: 1.2578125; font-weight: bold;">PARTENAIRES TECHNIQUES</span>
</td>
<td colspan="2"></td>
<td></td>
</tr>
<tr valign="top" style="height:9px">
<td></td>
<td colspan="14"></td>
<td></td>
</tr>
<tr valign="top" style="height:20px">
<td colspan="27"></td>
</tr>

</table>
</td><td width="50%">&nbsp;</td></tr>
</table>
</body>
</html>
    `;
  }

  private generatePage2ControlPoints(data: any): string {
    const page2Points = [
      ['Clignotants AV/ARR', 'Ceinture de Sécurité'],
      ['Feux Gabarit', 'Coupe batterie'],
      ['Feux arrière / Feux Stop', 'Etat de la Carrosserie']
    ];

    let rows = '';
    page2Points.forEach(([leftPoint, rightPoint]) => {
      const leftData = data?.pointsControle?.[leftPoint] || {};
      const rightData = data?.pointsControle?.[rightPoint] || {};

      rows += `
<tr valign="top" style="height:18px">
<td colspan="2"></td>
<td colspan="6" style="border: 1px solid #000000; padding-top: 2px; padding-left: 4px; padding-bottom: 2px; padding-right: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125;">${leftPoint}</span>
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${leftData.status === 'C' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${leftData.status === 'NC' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${leftData.status === 'BE' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${leftData.status === 'ME' ? '✓' : ''}
</td>
<td colspan="2"></td>
<td colspan="4" style="border: 1px solid #000000; padding-top: 2px; padding-left: 4px; padding-bottom: 2px; padding-right: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 9px; line-height: 1.2578125;">${rightPoint}</span>
</td>
<td colspan="2" style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${rightData.status === 'C' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${rightData.status === 'NC' ? '✓' : ''}
</td>
<td style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${rightData.status === 'BE' ? '✓' : ''}
</td>
<td colspan="2" style="border: 1px solid #000000; text-indent: 0px; text-align: center;">
${rightData.status === 'ME' ? '✓' : ''}
</td>
<td colspan="3"></td>
</tr>`;
    });

    // Espacement entre les points de contrôle et la légende
    rows += `<tr valign="top" style="height:26px"><td colspan="27"></td></tr>`;

    return rows;
  };

  private generatePage1Header(data: any): string {
    return `</tr>
  <tr valign="top" style="height:20px">
  <td></td>
  <td style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
  <span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">C= Conforme</span>
  </td>
  <td></td>
  <td style="pointer-events: auto; padding: 2px; text-indent: 0px; text-align: left;">
  <span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">N.C= Non Conforme</span>
  </td>
  <td></td>
  </tr>
  <tr valign="top" style="height:5px">
  <td colspan="5
  : left; ">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">N° de rapport:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="8" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.numeroRapport || ''}</span>
</td>
<td colspan="3">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Date de contrôle:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="9" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.dateControle || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<!-- Société / Entreprise -->
<tr valign="top" style="height:20px">
<td colspan="2"></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Société / Entreprise:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="20" style="border: 1px solid #000000; padding-top: 2px; padding-left: 4px; padding-bottom: 2px; padding-right: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.societe || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<!-- Localisation -->
<tr valign="top" style="height:20px">
<td colspan="2"></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Localisation:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="20" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.localisation || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<!-- N° d'immatriculation -->
<tr valign="top" style="height:20px">
<td colspan="2"></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">N° d'immatriculation:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="20" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.immatriculation || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<!-- N de série -->
<tr valign="top" style="height:20px">
<td colspan="2"></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">N de série:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="20" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.numeroSerie || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:10px">
<td colspan="29"></td>
</tr>

<!-- Documents présentés -->
<tr valign="top" style="height:60px">
<td colspan="2"></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:60px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td colspan="3"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Documents présentés:</span>
</td>
<td></td>
</tr>
<tr valign="top" style="height:20px">
<td colspan="3"></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="20" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.documentsPresentes || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<!-- Déclaration -->
<tr valign="top" style="height:20px">
<td colspan="2"></td>
<td colspan="25" style="border-left: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 7px; line-height: 1.2578125; font-style: italic;">Déclaration (écrite) du chef d'établissement, des travaux prévus d'être effectué par l'équipement de transport contrôlé (pour l'assistance d'examen d'adéquation) :</span>
</td>
<td colspan="2"></td>
</tr>

<!-- Espacement -->
<tr valign="top" style="height:10px">
<td colspan="29"></td>
</tr>

<!-- Moyens d'accès et autres informations -->
<tr valign="top" style="height:20px">
<td></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Moyen d'accès:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="8" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.moyenAcces || ''}</span>
</td>
<td colspan="13" style="border: 1px solid #000000;">
<span style="font-size: 10px;">${data.declarationTravaux || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<tr valign="top" style="height:20px">
<td></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Partiel:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="8" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.partiel || ''}</span>
</td>
<td colspan="3">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:110px"></td>
<td style="width:19px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align: left;">
<span style="font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; line-height: 1.2578125; font-weight: bold;">Conducteur:</span>
</td>
<td></td>
</tr>
</table>
</div>
</div>
</td>
<td colspan="10" style="border: 1px solid #000000; padding: 2px; text-indent: 0px; text-align: left;">
<span style="font-size: 10px;">${data.conducteur || ''}</span>
</td>
<td colspan="2"></td>
</tr>

<tr valign="top" style="height:20px">
<td></td>
<td colspan="5">
<div style="width: 100%; height: 100%; position: relative;">
<div style="position: absolute; overflow: hidden; width: 100%; height: 100%;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:129px"></td>
</tr>
<tr valign="top" style="height:20px">
<td style="pointer-events: auto; background-color: #D9D9D9; border: 1px solid #000000;"></td>
</tr>
</table>
</div>
<div style="position: relative; width: 100%; height: 100%; pointer-events: none;">
<table cellpadding="0" cellspacing="0" border="0" style="empty-cells: show; width: 100%; border-collapse: collapse;">
<tr role="none" valign="top" style="height:0">
<td style="width:9px"></td>
<td style="width:110px"></td>
<td style="width:10px"></td>
</tr>
<tr valign="top" style="height:20px">
<td></td>
<td style="pointer-events: auto; padding-top: 2px; padding-left: 2px; text-indent: 0px; text-align
`
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  closePreview(): void {
    this.close.emit();
  }

  printFiche(): void {
    window.print();
  }

  downloadFiche(): void {
    console.log('Téléchargement de la fiche:', this.inspectionData?.numeroRapport);
  }
}
