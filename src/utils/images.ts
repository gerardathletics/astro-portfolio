// Root Images
import meImage from '../assets/me.webp';
import logoImage from '../assets/logo.webp';
import backgroundImage from '../assets/background.webp';

export const rootImages = {
    me: meImage,
    logo: logoImage,
    background: backgroundImage,
} as const;

// Project Images
import geoserviceImage from '../assets/projects/geoservice.webp';
import internshipImage from '../assets/projects/internship.webp';
import thesisImage from '../assets/projects/thesis.webp';
import tailoringBasemapsImage from '../assets/projects/tailoring_basemaps.webp';
import sbkPlacesImage from '../assets/projects/sbk_places.webp';
import latlonImage from '../assets/projects/latlon.webp';
import geoPhotosImage from '../assets/projects/geo-photos.webp';

export const projectImages = {
    '/projects/geoservice.webp': geoserviceImage,
    '/projects/internship.webp': internshipImage,
    '/projects/thesis.webp': thesisImage,
    '/projects/tailoring_basemaps.webp': tailoringBasemapsImage,
    '/projects/sbk_places.webp': sbkPlacesImage,
    '/projects/latlon.webp': latlonImage,
    '/projects/geo-photos.webp': geoPhotosImage,
} as const;

// Athletics Images
import eskilstunaImage from '../assets/athletics/eskilstuna.webp';
import sabadellImage from '../assets/athletics/sabadell.webp';
import salamancaImage from '../assets/athletics/salamanca.webp';
import salamanca2Image from '../assets/athletics/salamanca2.webp';
import madridImage from '../assets/athletics/madrid.webp';
import donetskImage from '../assets/athletics/donetsk.webp';
import diari4Image from '../assets/athletics/diari4.webp';
import diari5Image from '../assets/athletics/diari5.webp';
import diari3Image from '../assets/athletics/diari3.webp';
import diari2Image from '../assets/athletics/diari2.webp';
import diari1Image from '../assets/athletics/diari1.webp';

export const athleticsImages = [
    eskilstunaImage,
    sabadellImage,
    salamancaImage,
    salamanca2Image,
    madridImage,
    donetskImage,
    diari4Image,
    diari5Image,
    diari3Image,
    diari2Image,
    diari1Image,
] as const;

// Map Images
import balearicImage from '../assets/maps/balearic.webp';
import utrechtTreesImage from '../assets/maps/utrecht_trees.webp';
import catalunyaLinesImage from '../assets/maps/catalunya_lines.webp';
import terremotosEspImage from '../assets/maps/terremotos_esp.webp';
import spainGeo3dImage from '../assets/maps/spain_geo_3d.webp';
import lleidaLegoImage from '../assets/maps/lleida_lego.webp';
import boscosImage from '../assets/maps/boscos_cat.webp';
import zonasAgricolasImage from '../assets/maps/zonas_agricolas.webp';
import landscapeRedImage from '../assets/maps/landscape_red.webp';
import highMountEspImage from '../assets/maps/high_mount_esp.webp';
import pointsCamarasaImage from '../assets/maps/points_camarasa.webp';
import riversmapImage from '../assets/maps/riversmap.webp';
import noguera3dImage from '../assets/maps/3d_noguera.webp';
import busesLleidaImage from '../assets/maps/buses_lleida.webp';
import buildingsMolleImage from '../assets/maps/buildings_molle.webp';
import nogueraImage from '../assets/maps/noguera.webp';
import pcSpainImage from '../assets/maps/pc_spain.webp';
import rmbhImage from '../assets/maps/rmbh.webp';
import segriaImage from '../assets/maps/segria.webp';
import telersImage from '../assets/maps/telers.webp';
import chronoTravelImage from '../assets/maps/chrono_travel.webp';
import bonneImage from '../assets/maps/bonne.webp';
import lleida3dImage from '../assets/maps/lleida_3d.webp';
import mariolaImage from '../assets/maps/mariola.webp';
import athletesCatImage from '../assets/maps/athletes_cat.webp';
import riversEspImage from '../assets/maps/rivers_esp.webp';
import azimuthalImage from '../assets/maps/azimuthal.webp';
import vendergrintenImage from '../assets/maps/vendergrinten.webp';
import tweetsAmsterdamImage from '../assets/maps/tweets_amsterdam.webp';
import tweetsAmsterdam2Image from '../assets/maps/tweets_amsterdam2.webp';
import federatsKm2Image from '../assets/maps/federats_km2.webp';
import xarxaFerroviariaImage from '../assets/maps/xarxa_ferroviaria.webp';
import blenderMountImage from '../assets/maps/blender_mount.webp';
import ecoCorridorImage from '../assets/maps/eco_corridor.webp';
import isoTracksImage from '../assets/maps/iso_tracks.webp';
import bioEspImage from '../assets/maps/bio_esp.webp';
import athleticsTracksImage from '../assets/maps/athletics_tracks.webp';
import brazilMetroImage from '../assets/maps/brazil_metro.webp';
import litterUtrechtImage from '../assets/maps/litter_utrecht.webp';
import lleidaAerialImage from '../assets/maps/lleida_aerial.webp';
import palmaEruptionImage from '../assets/maps/palma_eruption.webp';
import popDensLleidaImage from '../assets/maps/popdens_lleida.webp';
import rainEspImage from '../assets/maps/rain_esp.webp';
import stadiumsImage from '../assets/maps/stadiums.webp';
import subWaterImage from '../assets/maps/sub_water.webp';
import tenerifeImage from '../assets/maps/tenerife.webp';
import terremotos3dImage from '../assets/maps/terremotos_3d.webp';
import urbanRuralImage from '../assets/maps/urban-rural.webp';
import urbanCatImage from '../assets/maps/urban_cat.webp';
import hachuresImage from '../assets/maps/hachures.webp';
import parkingZonesImage from '../assets/maps/parking_zones.webp';
import athleticsTracksHexaImage from '../assets/maps/athletics_tracks_hexa.webp';
import camarasaRenderImage from '../assets/maps/camarasa_render.webp';
import campusCappontImage from '../assets/maps/campus_cappont.webp';
import catLandusesImage from '../assets/maps/cat_landuses.webp';
import lleidaRenderImage from '../assets/maps/lleida_render.webp';
import peaksImage from '../assets/maps/peaks.webp';
import slopeDistributionImage from '../assets/maps/slope_distribution.webp';
import tracksDensityImage from '../assets/maps/tracks_density.webp';
import voronoidImage from '../assets/maps/voronoid.webp';
import wanderwaalsImage from '../assets/maps/wanderwaals.webp';

export const mapImages = {
    '/maps/balearic.webp': balearicImage,
    '/maps/utrecht_trees.webp': utrechtTreesImage,
    '/maps/catalunya_lines.webp': catalunyaLinesImage,
    '/maps/terremotos_esp.webp': terremotosEspImage,
    '/maps/spain_geo_3d.webp': spainGeo3dImage,
    '/maps/lleida_lego.webp': lleidaLegoImage,
    '/maps/boscos_cat.webp': boscosImage,
    '/maps/zonas_agricolas.webp': zonasAgricolasImage,
    '/maps/landscape_red.webp': landscapeRedImage,
    '/maps/high_mount_esp.webp': highMountEspImage,
    '/maps/points_camarasa.webp': pointsCamarasaImage,
    '/maps/riversmap.webp': riversmapImage,
    '/maps/3d_noguera.webp': noguera3dImage,
    '/maps/buses_lleida.webp': busesLleidaImage,
    '/maps/buildings_molle.webp': buildingsMolleImage,
    '/maps/noguera.webp': nogueraImage,
    '/maps/pc_spain.webp': pcSpainImage,
    '/maps/rmbh.webp': rmbhImage,
    '/maps/segria.webp': segriaImage,
    '/maps/telers.webp': telersImage,
    '/maps/chrono_travel.webp': chronoTravelImage,
    '/maps/bonne.webp': bonneImage,
    '/maps/lleida_3d.webp': lleida3dImage,
    '/maps/mariola.webp': mariolaImage,
    '/maps/athletes_cat.webp': athletesCatImage,
    '/maps/rivers_esp.webp': riversEspImage,
    '/maps/azimuthal.webp': azimuthalImage,
    '/maps/vendergrinten.webp': vendergrintenImage,
    '/maps/tweets_amsterdam.webp': tweetsAmsterdamImage,
    '/maps/tweets_amsterdam2.webp': tweetsAmsterdam2Image,
    '/maps/federats_km2.webp': federatsKm2Image,
    '/maps/xarxa_ferroviaria.webp': xarxaFerroviariaImage,
    '/maps/blender_mount.webp': blenderMountImage,
    '/maps/eco_corridor.webp': ecoCorridorImage,
    '/maps/iso_tracks.webp': isoTracksImage,
    '/maps/bio_esp.webp': bioEspImage,
    '/maps/athletics_tracks.webp': athleticsTracksImage,
    '/maps/brazil_metro.webp': brazilMetroImage,
    '/maps/litter_utrecht.webp': litterUtrechtImage,
    '/maps/lleida_aerial.webp': lleidaAerialImage,
    '/maps/palma_eruption.webp': palmaEruptionImage,
    '/maps/popdens_lleida.webp': popDensLleidaImage,
    '/maps/rain_esp.webp': rainEspImage,
    '/maps/stadiums.webp': stadiumsImage,
    '/maps/sub_water.webp': subWaterImage,
    '/maps/tenerife.webp': tenerifeImage,
    '/maps/terremotos_3d.webp': terremotos3dImage,
    '/maps/urban-rural.webp': urbanRuralImage,
    '/maps/urban_cat.webp': urbanCatImage,
    '/maps/hachures.webp': hachuresImage,
    '/maps/parking_zones.webp': parkingZonesImage,
    '/maps/athletics_tracks_hexa.webp': athleticsTracksHexaImage,
    '/maps/camarasa_render.webp': camarasaRenderImage,
    '/maps/campus_cappont.webp': campusCappontImage,
    '/maps/cat_landuses.webp': catLandusesImage,
    '/maps/lleida_render.webp': lleidaRenderImage,
    '/maps/peaks.webp': peaksImage,
    '/maps/slope_distribution.webp': slopeDistributionImage,
    '/maps/tracks_density.webp': tracksDensityImage,
    '/maps/voronoid.webp': voronoidImage,
    '/maps/wanderwaals.webp': wanderwaalsImage,
} as const;
